export function onRequest({ request }) {
  const url = new URL(request.url);

  // Redirect /index.html → /
  if (url.pathname === "/index.html") {
    url.pathname = "/";
    return Response.redirect(url.toString(), 301);
  }

  // Remove junk query parameters
  if (url.search) {
    url.search = "";
    return Response.redirect(url.toString(), 301);
  }

  // Let Cloudflare handle normal + 404 pages
  return fetch(request);
}
