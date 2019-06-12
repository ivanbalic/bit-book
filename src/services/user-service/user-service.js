import User from "../../models/User";
import { headers } from "../../shared/headers";

class UserService {
  fetchProfile() {
    const PROFILE_BASE = "https://bitbookapi.azurewebsites.net/api/profile";
    return fetch(PROFILE_BASE, headers.getRequestHeader())
      .then(response => {
        return response.json();
      })
      .then(profile => {
        const {
          avatarUrl,
          name,
          about,
          postsCount,
          commentsCount,
          userId,
          email
        } = profile;
        return new User(
          avatarUrl,
          name,
          about,
          postsCount,
          commentsCount,
          null,
          userId,
          email
        );
      });
  }

  fetchUsers() {
    const USERS_BASE = "https://bitbookapi.azurewebsites.net/api/users";
    return fetch(USERS_BASE, headers.getRequestHeader())
      .then(response => {
        return response.json();
      })
      .then(userList => {
        return userList.map(user => {
          const { id, name, aboutShort, lastPostDate, avatarUrl } = user;
          const dateObj = new Date(lastPostDate);
          return new User(avatarUrl, name, aboutShort, null, null, dateObj, id);
        });
      });
  }

  fetchSingleUser(userId) {
    const SINGLE_USER_BASE = `https://bitbookapi.azurewebsites.net/api/users/${userId}`;
    return fetch(SINGLE_USER_BASE, headers.getRequestHeader())
      .then(response => {
        return response.json();
      })
      .then(user => {
        const {
          userId,
          name,
          email,
          about,
          avatarUrl,
          postsCount,
          commentsCount
        } = user;
        return new User(
          avatarUrl,
          name,
          about,
          postsCount,
          commentsCount,
          null,
          userId,
          email
        );
      });
  }

  changeProfile(data) {
    const PROFILE_BASE = "https://bitbookapi.azurewebsites.net/api/Profiles";
    return fetch(PROFILE_BASE, headers.putRequestHeader(data));
  }
}

export const userService = new UserService();
