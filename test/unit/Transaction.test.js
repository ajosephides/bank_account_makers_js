const Transaction = require('../../src/Transaction')

describe('Transaction', () => {

  it('initialises it all well', () => {
    let mockDate = '2019-01-24T00:00:00.000Z'
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() =>
    new Date(mockDate).valueOf()
  );
    transaction = new Transaction(1000.00, 'deposit', 1000.00);
    expect(transaction.amount).toBe(1000.00)
    expect(transaction.type).toMatch('deposit')
    expect(transaction.balance).toBe(1000.00)
    expect(transaction.date).toEqual(new Date(mockDate))
  });
});