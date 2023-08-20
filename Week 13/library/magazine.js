import Book from './book.js';

class Magazine extends Book {
  constructor(title, author, ISBN, issueNumber) {
    super(title, author, ISBN);
    this._issueNumber = issueNumber;
  }

  get issueNumber() {
    return this._issueNumber;
  }

  set issueNumber(newIssueNumber) {
    this._issueNumber = newIssueNumber;
  }
}

export default Magazine;
