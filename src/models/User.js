class User {
  constructor(
    id,
    name,
    email,
    postNumber,
    description,
    lastPostDate,
    commentNumber,
    image = "http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png"
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.email = email;
    this.postNumber = postNumber;
    this.description = description;
    this.lastPostDate = lastPostDate;
    this.commentNumber = commentNumber;
  }
  getFormatedTime() {
    return this.lastPostDate.toLocaleTimeString("en-GB", { hour12: false });
  }
  getFormatedDate() {
    const dateAndTime = `${this.lastPostDate.toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })}, ${this.lastPostDate.toLocaleTimeString("en-GB", { hour12: false })}`;
    return this.lastPostDate.getFullYear() !== 1970 ? dateAndTime : "No posts";
  }
  getElapsedTime() {
    const seconds = Math.floor((new Date() - this.lastPostDate) / 1000);

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
}
export { User };
