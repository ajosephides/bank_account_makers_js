const TransactionPrinter = require('../../src/TransactionPrinter')

var depositTransaction = {amount: 1000.00, type: 'deposit', balance: 2000.00, date: new Date('2019/8/24')}
var withdrawalTransaction = {amount: 1000.00, type: 'withdrawal', balance: 2000.00, date: new Date('2019/8/24')}


describe('Transaction Printer', () =>{

  it('formats a deposit transaction correctly', () => {
    var transactionPrinter = new TransactionPrinter(depositTransaction);
    expect(transactionPrinter.print()).toMatch('24/8/2019 || 1000.00 || || 2000.00')
  })

  it('formats a withdrawal transaction correctly', () => {
    var transactionPrinter = new TransactionPrinter(withdrawalTransaction);
    expect(transactionPrinter.print()).toMatch('24/8/2019 || || 1000.00 || 2000.00')
  })

})