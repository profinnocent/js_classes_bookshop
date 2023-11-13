export default class Database {
    constructor(){

        if(localStorage.getItem('bookShopdb')==null){
            localStorage.setItem('bookShopdb', JSON.stringify(bookShopDB))
        }
        else{
            bookShopDB = localStorage.getItem('bookShopdb');
        }
    }

    updateDB(){
        // bookShopDB.push(element)
        localStorage.setItem('bookShopdb', JSON.stringify(bookShopDB))
    }
}

let bookShopDB = [];
export {bookShopDB};