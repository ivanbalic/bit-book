import { LOGIN_ENDPOINT } from "../../shared/constants";
import { httpService } from "../../services/HttpService/HttpService";

class LoginCommunicator {
  login(data) {
    return httpService.authentication(LOGIN_ENDPOINT, data).then(response => {
      if (response.hasOwnProperty("error")) {
        throw new Error(response.error.message);
      }
      return response.sessionId;
    });
  }
}

export const loginCommunicator = new LoginCommunicator();
