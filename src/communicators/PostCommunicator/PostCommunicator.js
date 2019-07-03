import { TextPost } from "../../models/TextPost";
import { VideoPost } from "../../models/VideoPost";
import { ImagePost } from "../../models/ImagePost";
import { createPostQueryParam } from "../../shared/helpers";
import { httpService } from "../../services/HttpService/HttpService";
import { BASE_ENDPOINT, POSTS_ENDPOINT } from "../../shared/endpoints";

class PostCommunicator {
  getPosts() {
    return httpService.get(POSTS_ENDPOINT).then(response => {
      if (response.hasOwnProperty("message")) {
        throw new Error(response.message);
      }
      return response
        .filter(post => {
          if (post.hasOwnProperty("videoUrl")) {
            return post.videoUrl.includes("https://www.youtube.com/embed/");
          }
          return true;
        })
        .map(
          ({
            id,
            type,
            text,
            userId,
            imageUrl,
            videoUrl,
            commentsNum,
            dateCreated,
            userDisplayName
          }) => {
            const date = new Date(dateCreated);
            const timeFix = date.getTime() + 7200000;
            switch (type) {
              case "image":
                return new ImagePost(
                  id,
                  type,
                  userId,
                  imageUrl,
                  commentsNum,
                  userDisplayName,
                  new Date(timeFix)
                );
              case "video":
                return new VideoPost(
                  id,
                  type,
                  userId,
                  videoUrl,
                  commentsNum,
                  userDisplayName,
                  new Date(timeFix)
                );
              case "text":
                return new TextPost(
                  id,
                  type,
                  text,
                  userId,
                  commentsNum,
                  userDisplayName,
                  new Date(timeFix)
                );
              default:
                return null;
            }
          }
        );
    });
  }

  getSinglePost(postId, postType) {
    const queryParam = createPostQueryParam(postType);
    const SINGLE_POST_ENDPOINT = `${BASE_ENDPOINT}/${queryParam}/${postId}`;
    return httpService.get(SINGLE_POST_ENDPOINT).then(response => {
      if (response.hasOwnProperty("message")) {
        throw new Error(response.message);
      }
      const {
        id,
        type,
        text,
        userId,
        imageUrl,
        videoUrl,
        commentsNum,
        dateCreated,
        userDisplayName
      } = response;
      const date = new Date(dateCreated);
      const timeFix = date.getTime() + 7200000;
      switch (type) {
        case "image":
          return new ImagePost(
            id,
            type,
            userId,
            imageUrl,
            commentsNum,
            userDisplayName,
            new Date(timeFix)
          );
        case "video":
          return new VideoPost(
            id,
            type,
            userId,
            videoUrl,
            commentsNum,
            userDisplayName,
            new Date(timeFix)
          );
        case "text":
          return new TextPost(
            id,
            type,
            text,
            userId,
            commentsNum,
            userDisplayName,
            new Date(timeFix)
          );
        default:
          return null;
      }
    });
  }

  addPost(data, queryParam) {
    const POSTS_ENDPOINT = `${BASE_ENDPOINT}/${queryParam}`;
    return httpService.post(POSTS_ENDPOINT, data).then(response => {
      if (response === true) {
        return "Success!";
      }
      throw new Error("Faild!");
    });
  }

  deletePost(postId) {
    const DELETE_POST_ENDPOINT = `${POSTS_ENDPOINT}/${postId}`;
    return httpService.delete(DELETE_POST_ENDPOINT).then(response => {
      if (response.hasOwnProperty("message")) {
        throw new Error(
          "Something went wrong. Post can't be delted right now, please try again later."
        );
      }
      console.info(`Post with id ${response.id}, deleted`);
      return "Post successfully deleted.";
    });
  }
}

export const postCommunicator = new PostCommunicator();
