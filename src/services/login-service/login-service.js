
const LOGIN_ENDPOINT = 'http://bitbookapi.azurewebsites.net/api/login';


class LoginService {


    loginFetch = (data) => {

        return fetch(LOGIN_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Key': 'bitbookdev'
            },
            body: JSON.stringify(data)
        }
        )
    }
}


export const loginService = new LoginService();

