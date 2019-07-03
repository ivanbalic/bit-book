import { LOGIN_ENDPOINT } from "../../shared/endpoints";
import { httpService } from "../../services/HttpService/HttpService";

class LoginCommunicator {
  login(data) {
    return httpService.authentication(LOGIN_ENDPOINT, data).then(response => {
      if (response.hasOwnProperty("error")) {
        throw new Error(response.error.message);
      }
      sessionStorage.setItem("sessionId", response.sessionId);
    });
  }
}

export const loginCommunicator = new LoginCommunicator();
