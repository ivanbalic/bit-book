class Comment {
  constructor(id, body, postId, authorId, authorName, dateCreated) {
    this.id = id;
    this.body = body;
    this.like = false;
    this.postId = postId;
    this.authorId = authorId;
    this.authorName = authorName;
    this.dateCreated = dateCreated;
  }
  getFormatedTime() {
    return this.dateCreated.toLocaleTimeString("en-GB", { hour12: false });
  }
  getFormatedDate() {
    return this.dateCreated.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  getElapsedTime() {
    const seconds = Math.floor((new Date() - this.dateCreated) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      return interval > 1 ? interval + " years" : interval + " year";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval > 1 ? interval + " months" : interval + " month";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval > 1 ? interval + " days" : interval + " day";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval > 1 ? interval + " hours" : interval + " hour";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval > 1 ? interval + " minuts" : interval + " minut";
    }
    return seconds > 1 ? seconds + " seconds" : seconds + " second";
  }
  changeLike() {
    this.like = !this.like;
  }
}

export { Comment };
