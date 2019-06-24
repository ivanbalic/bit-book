import { Post } from "./Post";

class VideoPost extends Post {
  constructor(
    id,
    type,
    userId,
    videoUrl,
    commentsNum,
    dateCreated,
    userDisplayName
  ) {
    super(id, type, userId, commentsNum, dateCreated, userDisplayName);
    this.videoUrl = videoUrl;
  }
}

export { VideoPost };
