import type { VercelRequest, VercelResponse } from "@vercel/node";

// Cache the server fetch handler
let serverHandler: any = null;

async function getServerHandler() {
  if (serverHandler) return serverHandler;

  try {
    // Import the compiled TanStack Start server
    // The path is relative to the API function root in Vercel's environment
    const { default: handler } = await import("../dist/server/server.js");
    
    if (!handler || !handler.fetch) {
      throw new Error("Server module does not export a default handler with fetch");
    }
    
    serverHandler = handler;
    return serverHandler;
  } catch (error) {
    console.error("Failed to load server handler:", error);
    throw error;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const serverHandler = await getServerHandler();

    // Build the full URL
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host || req.headers["x-forwarded-host"] || "localhost";
    const url = new URL(`${protocol}://${host}${req.url}`);

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
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response body
    const responseBody = await response.text();
    res.send(responseBody);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
