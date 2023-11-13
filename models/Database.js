export default class Database {
    constructor(){
        this.bookstoredb = [];

        if(localStorage.getItem('bookstoredb')==null){
            localStorage.setItem('bookstoredb', JSON.stringify(this.bookstoredb))
        }
        else{
            this.bookstoredb = localStorage.getItem('bookstoredb');
        }
    }
}