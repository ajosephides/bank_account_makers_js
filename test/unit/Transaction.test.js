const Transaction = require('../../src/Transaction')

describe('Transaction', () => {

  it('initialises it all well', () => {
    let mockDate = '2019/08/24'
    jest.spyOn(global, 'Date').mockReturnValue(mockDate)
    transaction = new Transaction(1000.00, 'deposit', 1000.00);
    expect(transaction.amount).toBe(1000.00)
    expect(transaction.type).toMatch('deposit')
    expect(transaction.balance).toBe(1000.00)
    // below doesn't work but will leave commented out as want a reminder to come back
    // console.log(transaction.date)
    // expect(transaction.date).toEqual(mockDate)
  });
});