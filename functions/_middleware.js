export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Redirect if accessed via the .pages.dev subdomain
  if (url.hostname.endsWith(".pages.dev")) {
    return Response.redirect(`https://gyaanbotics.com${url.pathname}`, 301);
  }

  return await context.next();
}
