
class User {
    constructor(image = 'https://via.placeholder.com/150', name, description, postNumber, commentNumber, lastPostDate, id, email) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.postNumber = postNumber;
        this.commentNumber = commentNumber;
        this.lastPostDate = lastPostDate;
        this.id = id;
        this.email = email;
    }
//TODO
    getPostTime() {
        let result;

        let year = this.lastPostDate.getFullYear();
        let day = this.lastPostDate.getDate();
        let month = this.lastPostDate.getMonth();

        let currentYear = new Date().getFullYear();
        let currentDay = new Date().getDate();
        let currentMonth = new Date().getMonth();


        if (year !== 1970) {
            if (currentYear === year && currentDay === day && currentMonth === month) {
                result = this.lastPostDate.toLocaleTimeString().split("/").join(".");
            } else {
                result = this.lastPostDate.toLocaleString().split("/").join(".");
            }
        } else {
            result = false;
        }
        return result;
    }
}
export default User;