class BookList{
    constructor(...books){
        this.booksRead = 0; // Number of books marked as read
        this.booksNotRead = 0; // Number of books marked not read yet
        this.nextBook; // A reference to the next book to read (book object)
        this.currentBook; // A reference to the current book being read (book object)
        this.lastBook; // A reference to the last book read (book object)
        this.books = books; // An array of all the Books
    }

    add(book){
        this.books.push(book);
    }

    finishCurrentBook(){
        this.currentBook.read = true;
        this.currentBook.readDate = Date.now();
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.findNextBookToRead();
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