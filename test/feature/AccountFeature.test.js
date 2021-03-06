const Account = require('../../src/Account')
let mocktime = require('timekeeper')

describe('returns a statement', () => {

  test('should be able to output a statement with correct headings, amounts,balances and in reverse chronological order', () => {
   let account = new Account();
   let t1Date = new Date(2019,7,10,10,0,0)
   mocktime.travel(t1Date)
   account.deposit(1000.00)
   let t2Date = new Date(2019,7,13,10,0,0)
   mocktime.travel(t2Date)
   account.deposit(2000.00)
   let t3Date = new Date(2019, 7, 14, 11, 0, 0)
   mocktime.travel(t3Date)
   account.withdraw(500.00)
   mocktime.reset()
   expect(account.statement()).toBe("date || credit || debit || balance\n14/8/2019 || || 500.00 || 2500.00\n13/8/2019 || 2000.00 || || 3000.00\n10/8/2019 || 1000.00 || || 1000.00")
  });
});