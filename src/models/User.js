
class User {
    constructor(id, name, aboutShort, lastPostDate, image = 'https://via.placeholder.com/150') {
        this.id = id;
        this.name = name;
        this.aboutShort = aboutShort;
        this.lastPostDate = lastPostDate;
        this.image = image;
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