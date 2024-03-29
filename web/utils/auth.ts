import decode from "jwt-decode";

interface User {
  sub: string;
  name: string;
  avatarUrl: string;
}

export function getUser(): User {
  const token = useCookie("token");

  if (!token) {
    throw new Error("Unauthenticated.");
  }

  const user: User = decode(token.value as string);

  return user;
}
