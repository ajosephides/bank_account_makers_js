const TransactionPrinter = require('./TransactionPrinter')

module.exports = class StatementPrinter{

  constructor(transactions, transactionPrinter = TransactionPrinter) {
    this.transactions = transactions;
    this.transactionPrinter = transactionPrinter;
  }

  print(){
    let statement = []
    let header = 'date || credit || debit || balance'
    statement.push(header)
    this.transactions.reverse().forEach((transaction) => {
      let transactionPrint = new this.transactionPrinter(transaction);
      statement.push(transactionPrint.print())
    });
    return statement.join('\n')
  }

  
}