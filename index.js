import Database, {bookShopDB} from './models/Database.js';

import User from './models/User.js';
import Book from './models/Book.js';
import Bookshop from './models/Bookshop.js';



// const okay = new User("Okay", "Obi", "okayobi@gmail.com","Okay@12345678"," ")
// console.log(okay._firstname)
// console.log(okay.getFirstname)

const prof = new User("Prof", "Obi", "prof@gmail.com","Prof@12345678"," ")
const book = new Book("The Tiger", "Peter Clever", "Fiction", "22-Nov-23", "images/logo.jpg")
prof.addBook(book)
console.log(prof)

bookShopDB.push(prof)

const db = new Database();
db.updateDB()

console.log(bookShopDB)
