export function onRequest({ request }) {
  const url = new URL(request.url);

  // Redirect /index.html to /
  if (url.pathname.endsWith("/index.html")) {
    url.pathname = url.pathname.replace("/index.html", "/");
    return Response.redirect(url.toString(), 301);
  }

  return fetch(request);
}
