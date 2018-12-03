
class User {
    constructor(image = 'https://via.placeholder.com/150', name, description, postNumber, commentNumber, lastPostDate, id) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.postNumber = postNumber;
        this.commentNumber = commentNumber;
        this.lastPostDate = lastPostDate;
        this.id = id;
    }

    getPostTime() {
        let result;
        var fullDate = new Date(this.lastPostDate);
        let year = fullDate.getFullYear();
        let day = fullDate.getDay();
        let month = fullDate.getMonth();


        let currentYear = new Date().getFullYear();
        let currentDay = new Date().getDay();
        let currentMonth = new Date().getMonth();

        if (currentYear === year && currentDay === day && currentMonth === month) {
            result = fullDate.toLocaleTimeString().split("/").join(".");
        } else {
            result = fullDate.toLocaleString().split("/").join(".");
        }
        return result;
    }
}
export default User;