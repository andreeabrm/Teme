import Book from './book.js';
import Magazine from './magazine.js';
import Library from './library.js';

const library = new Library('My Library');

const bookList = document.getElementById('book-list');

function displayBooks() {
  bookList.innerHTML = '';

  library.books.forEach((book) => {
    const li = document.createElement('li');
    const bookInfo = `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`;

    if (book instanceof Magazine) {
      li.textContent = `${bookInfo}, Issue Number: ${book.issueNumber}`;
    } else {
      li.textContent = bookInfo;
    }

    bookList.appendChild(li);
  });
}

function addBookToLibrary(title, author, isbn, issueNumber) {
  if (issueNumber) {
    const magazine = new Magazine(title, author, isbn, issueNumber);
    library.addBook(magazine);
  } else {
    const book = new Book(title, author, isbn);
    library.addBook(book);
  }

  displayBooks();
}

document.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.target;
  if (form.id === 'add-book-form') {
    const title = form.elements['title'].value;
    const author = form.elements['author'].value;
    const isbn = form.elements['isbn'].value;
    const issueNumber = form.elements['issue-number'].value;

    console.log('Adding book:', title, author, isbn, issueNumber);

    addBookToLibrary(title, author, isbn, issueNumber);

    form.reset();
  }
});

displayBooks();
