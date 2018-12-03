import Profile from '../../models/Profile';

class ProfileSerice {

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
                const { avatarUrl, name, about, postsCount, commentsCount } = profile;
                return new Profile(avatarUrl, name, about, postsCount, commentsCount)
            })
    }
}
export const profileService = new ProfileSerice();