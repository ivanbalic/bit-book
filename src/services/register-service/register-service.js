import { headers } from "../../shared/headers";

const REGISTER_ENDPOINT = "https://bitbookapi.azurewebsites.net/api/register";

class RegisterService {
  registerFetch = data => {
    return fetch(REGISTER_ENDPOINT, headers.authHeader(data));
  };
}

export const registerService = new RegisterService();
