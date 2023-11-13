export default class Book {
    
    constructor(title, author, category, pub_date, image){
        this.id = 0;
        this.verified = 0;
        this.bookcode = Math.random().toString(32).slice(2);
        this.updatedAt = new Date();

        this.image = image || "/images/logo.jpg";

        this.title = title;
        this.author = author;
        this.category = category;
        this.pub_date = pub_date;
    }
    
}


