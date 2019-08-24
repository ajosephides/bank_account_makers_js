module.exports = class Transaction {

  constructor(amount, type, balance){
    this.amount = amount;
    this.type = type;
    this.balance = balance;
    this.date = new Date();
  }

}
