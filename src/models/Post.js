class Post {
    constructor(commentsNum, dateCreated, id, type, userDisplayName, userId, content) {
        this.commentsNum = commentsNum;
        this.dateCreated = dateCreated;
        this.id = id;
        this.type = type;
        this.userDisplayName = userDisplayName;
        this.userId = userId;
        this.content = content;
    }

    getCapitalType() {
        return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    }
}

export default Post;