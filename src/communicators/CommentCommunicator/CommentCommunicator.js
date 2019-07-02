import { Comment } from "../../models/Comment";
import { COMMENTS_ENPOINT } from "../../shared/endpoints";
import { httpService } from "../../services/HttpService/HttpService";

class CommentCommunicator {
  getComments(postId) {
    const COMMENTS_BY_POST_ENDPOINT = `${COMMENTS_ENPOINT}?postId=${postId}`;

    return httpService.get(COMMENTS_BY_POST_ENDPOINT).then(response => {
      if (response.hasOwnProperty("message")) {
        throw new Error(response.message);
      }
      return response.map(
        ({ id, body, postId, authorId, authorName, dateCreated }) => {
          const day1 = new Date(dateCreated);
          const timeInMillis = day1.getTime() + 7200000;
          return new Comment(
            id,
            body,
            postId,
            authorId,
            authorName,
            new Date(timeInMillis)
          );
        }
      );
    });
  }

  addComment(data) {
    return httpService.post(COMMENTS_ENPOINT, data).then(response => {
      if (response.hasOwnProperty("message")) {
        throw new Error("Something went wrong! Please try again later!");
      }
    });
  }
}

export const commentCommunicator = new CommentCommunicator();
