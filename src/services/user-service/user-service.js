import User from '../../models/User';


class UserService {


    fetchProfile() {
        const PROFILE_BASE = "http://bitbookapi.azurewebsites.net/api/profile";
        return fetch(PROFILE_BASE, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then(response => {

                return response.json()
            })
            .then(profile => {
                const { avatarUrl, name, about, postsCount, commentsCount, userId, email } = profile;
                return new User(avatarUrl, name, about, postsCount, commentsCount, null, userId, email);
            })
    }

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
                return userList.map(user => {
                    const { id, name, aboutShort, lastPostDate, avatarUrl } = user;
                    const dateObj = new Date(lastPostDate)
                    return new User(avatarUrl, name, aboutShort, null, null, dateObj, id);
                })
            })
    }

    fetchSingleUser(userId) {
        const SINGLE_USER_BASE = `http://bitbookapi.azurewebsites.net/api/users/${userId}`;
        return fetch(SINGLE_USER_BASE, {
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
            .then(user => {
                const { userId, name, email, about, avatarUrl, postsCount, commentsCount } = user;
                return new User(avatarUrl, name, about, postsCount, commentsCount, null, userId, email);
            })
    }

    changeProfile(data) {
        const PROFILE_BASE = "http://bitbookapi.azurewebsites.net/api/Profiles";
        return fetch(PROFILE_BASE, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            },
            body: JSON.stringify(data)

        });
    }

}

export const userService = new UserService();

