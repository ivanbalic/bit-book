import { REGISTER_ENDPOINT } from "../../shared/constants";
import { httpService } from "../../services/HttpService/HttpService";

class RegisterCommunicator {
  register = data => {
    return httpService
      .authentication(REGISTER_ENDPOINT, data)
      .then(response => {
        if (response.hasOwnProperty("error")) {
          throw new Error(response.error.message);
        }
        return {
          message: "Registration was successfull! You can login now!"
        };
      });
  };
}

export const registerCommunicator = new RegisterCommunicator();
