import { headers } from '../../shared/headers';

const LOGIN_ENDPOINT = 'http://bitbookapi.azurewebsites.net/api/login';


class LoginService {


    loginFetch = (data) => {

        return fetch(LOGIN_ENDPOINT, headers.authHeader(data)
        )
    }
}


export const loginService = new LoginService();

