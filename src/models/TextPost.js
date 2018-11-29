import Post from "./Post";

export default class TextPost extends Post {
    constructor(post) {
        super(post)
        this.text = post.text;
    }
};