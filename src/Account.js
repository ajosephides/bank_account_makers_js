module.exports = class Account {
  
  constructor() {
    this._balance = 0;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount){
    this._balance += amount;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    this._balance += -amount;
  }

  statement(){
    return 'date || credit || debit || balance'
  }
}


