const StatementPrinter = require('../../src/StatementPrinter')

var mockTransaction = jest.fn()
const mockPrint = jest.fn(() => '24/8/2019 || 1000.00 || || 1000.00');
jest.mock('../../src/TransactionPrinter', () => {
  return jest.fn().mockImplementation(() => {
    return {print: mockPrint};
  });
});

describe('Statement Printer', () => {

  it('prints a statement', () => {
    let mockTransactions = [mockTransaction]
    statmentPrinter = new StatementPrinter(mockTransactions)
    expect(statmentPrinter.print()).toMatch('date || credit || debit || balance\n24/8/2019 || 1000.00 || || 1000.00')
  });
});