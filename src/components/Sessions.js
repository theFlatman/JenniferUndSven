import * as Cookies from "js-cookie";

export const setSessionCookie = (cookieName, cookieValue) => {
  Cookies.remove(cookieName);
  Cookies.set(cookieName, cookieValue);
};

export const getSessionCookie = cookieName => {
  const sessionCookie = Cookies.get(cookieName);

  if (sessionCookie === undefined) {
    return null;
  } else {
    return sessionCookie.toString();
  }
};
