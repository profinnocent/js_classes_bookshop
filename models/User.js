export default class User {
    constructor(firstname, lastname, email, password, image){
        this.id = 0;
        this.active = 0;
        this.verified = 0;
        this.usercode = Math.random().toString(32).slice(2);
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.books = [];

        this.image = image==null || image==undefined || image=="" || image==" " ? "/images/logo.jpg" : image;

        this._firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;

        
    }

    get getFirstname(){
        return this._firstname;
    }

    static loginUser(){
        return "login successful";
    }

    addBook(book_obj){
        this.books.push(book_obj)
    }
}


