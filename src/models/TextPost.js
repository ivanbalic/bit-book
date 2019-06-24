import { Post } from "./Post";

class TextPost extends Post {
  constructor(
    id,
    type,
    text,
    userId,
    commentsNum,
    dateCreated,
    userDisplayName
  ) {
    super(id, type, userId, commentsNum, dateCreated, userDisplayName);
    this.text = text;
  }
}

export { TextPost };
