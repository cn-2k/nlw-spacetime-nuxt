export default defineEventHandler((event) => {
  const { github } = useRuntimeConfig().public;
  const token = getCookie(event, "token");
  const signInURL = `https://github.com/login/oauth/authorize?client_id=${github.clientId}`;

  if (!token && event.node.req.url?.startsWith("/memories")) {
    setCookie(event, "redirectTo", getRequestURL(event).pathname, {
      path: "/",
      maxAge: 10,
      httpOnly: true,
    });

    return sendRedirect(event, signInURL);
  }
});
