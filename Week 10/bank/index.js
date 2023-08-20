class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }

    deposit(amount) {
      this.balance += amount;
      document.getElementById(this.accountNumber + "Balance").textContent = "$" + this.balance;
      console.log(`Deposited $${amount}. Current balance: $${this.balance}`);
    }

    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        document.getElementById(this.accountNumber + "Balance").textContent = "$" + this.balance;
        console.log(`Withdrawn $${amount}. Current balance: $${this.balance}`);
      } else {
        this.displayError("Insufficient funds.");
      }
    }

    getBalance() {
      return this.balance;
    }

    displayError(message) {
      const errorElement = document.getElementById(this.accountNumber + "Error");
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }
  }

  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, interestRate, transactionLimit) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
      this.transactionLimit = transactionLimit;
    }

    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        document.getElementById(this.accountNumber + "Balance").textContent = "$" + this.balance;
        console.log(`Withdrawn $${amount}. Current balance: $${this.balance}`);
      } else {
        this.displayError("Insufficient funds.");
      }
    }
  }

  class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, transactionLimit) {
      super(accountNumber, balance);
      this.transactionLimit = transactionLimit;
    }

    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        document.getElementById(this.accountNumber + "Balance").textContent = "$" + this.balance;
        console.log(`Withdrawn $${amount}. Current balance: $${this.balance}`);
      } else {
        this.displayError("Insufficient funds.");
      }
    }
  }

  // Create instances
  const savingsAccount = new SavingsAccount("savings", 1000, 0.05, 500);
  const checkingAccount = new CheckingAccount("checking", 2000, 1000);

      // Add the displayError method and create instances here
function displayError(accountNumber, message) {
    const errorElement = document.getElementById(accountNumber + "Error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}