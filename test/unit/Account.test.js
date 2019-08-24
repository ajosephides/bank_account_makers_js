const Account = require('../../src/Account')

var transactionMock = jest.fn()

describe('Account', () => {
  let account;
  beforeEach(() => {
    account = new Account(transactionMock);
  });

  test('user can make a deposit', () => {
    account.deposit(1000.00)
    expect(account.balance).toBe(1000.00)
  })

  test('user can make a withdrawal', () => {
    account.deposit(1000.00)
    account.withdraw(500.00)
    expect(account.balance).toBe(500.00)
  })

  test('statement has the correct headings', () => {
    expect(account.statement()).toMatch('date || credit || debit || balance')
  })

  test(`a transaction is added to the account on deposit`, () => {
    account.deposit(1000.00)
    expect(account.transactions).toHaveLength(1)
  })

  test(`a transaction is added to the account on withdrawal`, () => {
    account.deposit(1000.00)
    account.withdraw(500.00)
    expect(account.transactions).toHaveLength(2)
  })
})