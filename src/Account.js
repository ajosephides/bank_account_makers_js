const Transaction = require('./Transaction')
const StatementPrinter = require('./StatementPrinter')

module.exports = class Account {
  
  constructor(transaction = Transaction) {
    this._balance = 0;
    this._transactions = [];
    this.transaction = transaction;
    this.statementPrinter = StatementPrinter;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount){
    this._balance += amount;
  }

  get transactions(){
    return this._transactions;
  }

  set transactions(transaction){
    this._transactions.push(transaction);
  }

  deposit(amount) {
    this._balance += amount;
    let transaction = new this.transaction(amount,'deposit', this._balance)
    this._transactions.push(transaction)
  }

  withdraw(amount) {
    this._balance += -amount;
    let transaction = new this.transaction(amount, 'withdrawal', this._balance)
    this._transactions.push(transaction)
  }

  statement(){
    let statementPrinter = new this.statementPrinter();
    return statementPrinter.print(this._transactions);
  }
}


