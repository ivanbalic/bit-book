import Post from "./Post";

export default class ImagePost extends Post {
    constructor(post) {
        super(post)
        this.imageUrl = post.imageUrl;
    }
};
