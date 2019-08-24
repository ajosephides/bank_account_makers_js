module.exports = class TransactionPrinter{

  constructor(transaction){
    this.transaction = transaction;
  }

  print(){
    return `${this.formatDate(this.transaction.date)} || ${this.transaction.amount.toFixed(2)} || || ${this.transaction.balance.toFixed(2)}`
  }


  formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate()
    return `${day}/${month}/${year}`
  }

}
