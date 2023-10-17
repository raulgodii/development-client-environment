class BookList{
    constructor(){
        this.nextBook; // A reference to the next book to read (book object)
        this.currentBook; // A reference to the current book being read (book object)
        this.lastBook; // A reference to the last book read (book object)
        this.books = []; // An array of all the Books
    }

    add(book){
        if(!this.exitsBook(book)){
            this.books.push(book);
            if(!this.currentBook){
                this.currentBook = book;
            }
            if(!this.nextBook){
                this.nextBook = book;
            }
        }
    }

    finishCurrentBook(){
        this.currentBook.read = true;
        this.currentBook.readDate = Date.now();
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.findNextBookToRead();
    }

    exitsBook(book){
        this.books.forEach(element => {
            if(element.title == book.title){
                return true;
            }
        });
        return false;
    }

    findNextBookToRead() {
        return this.books.find(book => !book.read);
    }

    getNumberOfBooksRead() {
        return this.books.filter(book => book.read).length;
    }

    getNumberOfBooksNotRead() {
        return this.books.filter(book => !book.read).length;
    }

    setNextBookToRead(book) {
        this.currentBook = book;
    }

}

class Book{
    constructor(title, genre, author, readDate = null){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = readDate;
    }
}


const book1 = new Book('Book 1', 'Fiction', 'Author 1');
const book2 = new Book('Book 2', 'Non-Fiction', 'Author 2');
const book3 = new Book('Book 3', 'Mystery', 'Author 3');

const bookList = new BookList();
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);

console.log('Number of books read:', bookList.getNumberOfBooksRead()); // Output: 0
console.log('Number of books not read:', bookList.getNumberOfBooksNotRead()); // Output: 3

bookList.finishCurrentBook();
console.log('Number of books read:', bookList.getNumberOfBooksRead()); // Output: 1
console.log('Number of books not read:', bookList.getNumberOfBooksNotRead()); // Output: 2