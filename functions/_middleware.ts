// This middleware handles all requests and serves the Vue SPA
export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
  env: any;
}) {
  const url = new URL(context.request.url);
  
  // Try to serve the requested asset
  const response = await context.next();
  
  // If asset not found (404), serve index.html for SPA routing
  if (response.status === 404) {
    // Serve index.html for client-side routing
    const indexResponse = await context.env.ASSETS.fetch(new URL('/index.html', url.origin));
    return new Response(indexResponse.body, {
      status: indexResponse.status,
      statusText: indexResponse.statusText,
      headers: {
        ...Object.fromEntries(indexResponse.headers),
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  }
  
  return response;
}
