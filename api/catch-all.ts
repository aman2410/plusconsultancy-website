// Cache the server fetch handler
let serverHandler: any = null;
let loadError: Error | null = null;

async function getServerHandler() {
  if (loadError) throw loadError;
  if (serverHandler) return serverHandler;

  try {
    // Import the compiled TanStack Start server
    // In Vercel, this path resolves to the dist folder in the deployment
    console.log("[API] Loading server from dist/server/server.js");
    // @ts-ignore - Dynamic import of generated server file
    const serverModule = await import("../dist/server/server.js");
    
    console.log("[API] Server module imported, keys:", Object.keys(serverModule));
    
    const handler = serverModule.default || serverModule;
    
    if (!handler || !handler.fetch) {
      const errMsg = `Server module structure invalid. Got: ${JSON.stringify({
        hasDefault: !!serverModule.default,
        defaultKeys: serverModule.default ? Object.keys(serverModule.default) : [],
        moduleKeys: Object.keys(serverModule),
      })}`;
      console.error("[API]", errMsg);
      throw new Error(errMsg);
    }
    
    console.log("[API] Server handler loaded successfully");
    serverHandler = handler;
    return serverHandler;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error("[API] Failed to load server handler:", err.message, err.stack);
    loadError = err;
    throw err;
  }
}

export default async function handler(req: any, res: any) {
  try {
    console.log(`[API] ${req.method} ${req.url}`);
    
    const serverHandler = await getServerHandler();

    // Build the full URL with proper protocol
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host || "localhost";
    const url = new URL(`${protocol}://${host}${req.url}`);
    
    console.log("[API] Forwarding to server:", url.toString());

    // Create a Request object from the Vercel request
    let body: BodyInit | undefined;
    if (req.method !== "GET" && req.method !== "HEAD" && req.body) {
      body = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
    }

    const request = new Request(url, {
      method: req.method,
      headers: new Headers(
        Object.entries(req.headers).reduce((acc, [key, value]) => {
          if (typeof value === "string") {
            acc[key] = value;
          } else if (Array.isArray(value)) {
            acc[key] = value[0];
          }
          return acc;
        }, {} as Record<string, string>)
      ),
      body,
    });

    // Call the TanStack Start server's fetch handler
    const response = await serverHandler.fetch(request, undefined, undefined);

    // Set response status
    res.status(response.status);

    // Set response headers
    response.headers.forEach((value: string, key: string) => {
      res.setHeader(key, value);
    });

    // Send response body
    const responseBody = await response.text();
    res.send(responseBody);
  } catch (error) {
    console.error("[API] Handler error:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : String(error),
      code: "NOT_FOUND",
    });
  }
}
