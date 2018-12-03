
class User {
    constructor(id, name, aboutShort, lastPostDate, image = 'https://via.placeholder.com/150') {
        this.id = id;
        this.name = name;
        this.aboutShort = aboutShort;
        this.lastPostDate = lastPostDate;
        this.image = image;
    }
}
export default User;