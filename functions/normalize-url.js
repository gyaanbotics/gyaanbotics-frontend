export function onRequest({ request }) {
  const url = new URL(request.url);

  // Redirect index.html → /
  if (url.pathname.endsWith("/index.html")) {
    url.pathname = "/";
    return Response.redirect(url.toString(), 301);
  }

  // Strip query parameters
  if (url.search) {
    url.search = "";
    return Response.redirect(url.toString(), 301);
  }

  return fetch(request);
}
