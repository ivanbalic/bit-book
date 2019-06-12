import { headers } from "../../shared/headers";

const LOGIN_ENDPOINT = "https://bitbookapi.azurewebsites.net/api/login";

class LoginService {
  loginFetch = data => {
    return fetch(LOGIN_ENDPOINT, headers.authHeader(data));
  };

  isLoggedIn() {
    return sessionStorage.getItem("sessionId");
  }
}

export const loginService = new LoginService();
