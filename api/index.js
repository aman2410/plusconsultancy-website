import server from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host || 'localhost';
    const url = new URL(req.url, `${protocol}://${host}`);

    let body;
    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    }

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers || {})) {
      if (typeof v === 'string') headers.set(k, v);
    }

    const request = new Request(url, {
      method: req.method,
      headers,
      body,
    });

    const response = await server.fetch(request);

    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const text = await response.text();
    res.send(text);
  } catch (err) {
    console.error('api/index.js error', err);
    res.status(500).send('Internal server error');
  }
}
