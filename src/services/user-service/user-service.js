import User from '../../models/User';


class UserService {

    fetchUsers() {
        const USERS_BASE = 'http://bitbookapi.azurewebsites.net/api/users';
        return fetch(USERS_BASE, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then(response => {
                return response.json();
            })
            .then(userList => {
                console.log("userList", userList);
                return userList.map(user => {
                    const { id, name, aboutShort, lastPostDate, avatarUrl } = user;
                    return new User(id, name, aboutShort, lastPostDate, avatarUrl);
                })
            })
    }
}

export const userService = new UserService();

