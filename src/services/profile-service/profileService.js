import { Profile } from '../../models/Profile';

const fetchProfile = () => {
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
            return new Profile(profile.avatarUrl, profile.name, profile.about, profile.postsCount, profile.commentsCount)
        })
}

export { fetchProfile }