class BookList{
    constructor(){
        this.booksRead = 0; // Number of books marked as read
        this.booksNotRead = 0; // Number of books marked not read yet
        this.nextBook; // A reference to the next book to read (book object)
        this.currentBook; // A reference to the current book being read (book object)
        this.lastBook; // A reference to the last book read (book object)
        this.books; // An array of all the Books
    }

    add(book){
        this.currentBook = book;
    }

    finishCurrentBook(){
        this.currentBook.read = true;
        this.lastBook = this.currentBook;
    }


}

class Book{
    constructor(title, genre, author, readDate = Date.now()){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = readDate;
    }
}