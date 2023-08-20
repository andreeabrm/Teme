class Book {
  constructor(title, author, ISBN) {
    this._title = title;
    this._author = author;
    this._ISBN = ISBN;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    this._author = newAuthor;
  }

  get ISBN() {
    return this._ISBN;
  }
}

export default Book;
