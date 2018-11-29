import Post from "./Post";

export default class VideoPost extends Post {
    constructor(post) {
        super(post)
        this.videoUrl = post.videoUrl;
    }
};