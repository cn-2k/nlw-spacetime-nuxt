import { api } from "@/utils/api";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);

  if (!code) {
    return sendRedirect(event, "/");
  }

  const redirectTo = getCookie(event, "redirectTo");

  // const response: any = await $fetch("http://localhost:3333/register", {
  //   method: "POST",
  //   body: {
  //     code,
  //   },
  // });

  // Axios alternative for $fetch:
  const registerResponse = await api.post("/register", {
    code,
  });

  const { token } = registerResponse.data;

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30;

  setCookie(event, "token", token, {
    path: "/",
    maxAge: cookieExpiresInSeconds,
  });

  return sendRedirect(event, redirectTo ?? "/");
});
