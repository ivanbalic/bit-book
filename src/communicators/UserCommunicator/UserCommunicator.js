import { User } from "../../models/User";
import { httpService } from "../../services/HttpService/HttpService";
import { PROFILE_ENDPOINT, USERS_ENDPOINT } from "../../shared/constants";

class UserCommunicator {
  getProfile() {
    return httpService.get(PROFILE_ENDPOINT).then(response => {
      if (response.hasOwnProperty("message")) {
        throw new Error(response.message);
      }
      const {
        name,
        email,
        about,
        userId,
        avatarUrl,
        postsCount,
        commentsCount
      } = response;
      return new User(
        userId,
        name,
        email,
        postsCount,
        about,
        null,
        commentsCount,
        avatarUrl
      );
    });
  }

  getUsers() {
    return httpService.get(USERS_ENDPOINT).then(response => {
      if (response.hasOwnProperty("message")) {
        throw new Error(response.message);
      }
      return response.map(
        ({ id, name, aboutShort, lastPostDate, avatarUrl }) => {
          const day1 = new Date(lastPostDate);
          const timeInMillis = day1.getTime() + 7200000;
          return new User(
            id,
            name,
            null,
            null,
            aboutShort,
            new Date(timeInMillis),
            null,
            avatarUrl
          );
        }
      );
    });
  }

  getSingleUser(userId) {
    const SINGLE_USER_ENDPOINT = `${USERS_ENDPOINT}/${userId}`;
    return httpService.get(SINGLE_USER_ENDPOINT).then(response => {
      if (response.hasOwnProperty("message")) {
        throw new Error(response.message);
      }
      const {
        name,
        email,
        about,
        userId,
        avatarUrl,
        postsCount,
        lastPostDate,
        commentsCount
      } = response;
      const day1 = new Date(lastPostDate);
      const timeInMillis = day1.getTime() + 7200000;
      return new User(
        userId,
        name,
        email,
        postsCount,
        about,
        new Date(timeInMillis),
        commentsCount,
        avatarUrl
      );
    });
  }

  editProfile(data) {
    return httpService.put(`${PROFILE_ENDPOINT}s`, data);
  }
}

export const userCommunicator = new UserCommunicator();
