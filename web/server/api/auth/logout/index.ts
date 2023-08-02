export default defineEventHandler((event) => {
  setCookie(event, "token", "", {
    path: "/",
    maxAge: 0,
  });

  return sendRedirect(event, "/");
});
