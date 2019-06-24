import { Post } from "./Post";

class ImagePost extends Post {
  constructor(
    id,
    type,
    userId,
    imageUrl,
    commentsNum,
    dateCreated,
    userDisplayName
  ) {
    super(id, type, userId, commentsNum, dateCreated, userDisplayName);
    this.imageUrl = imageUrl;
  }
}

export { ImagePost };
