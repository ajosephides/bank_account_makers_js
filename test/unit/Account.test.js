const Account = require('../../src/Account')

describe('Account', () => {

  test('user can make a deposit', () => {
    let account = new Account();
    account.deposit(1000.00)
    expect(account.balance).toBe(1000.00)
  })

  test('user can make a withdrawal', () => {
    let account = new Account();
    account.deposit(1000.00)
    account.withdraw(500.00)
    expect(account.balance).toBe(500.00)
  })

  test('statement has the correct headings', () => {
    let account = new Account();
    expect(account.statement()).toMatch('date || credit || debit || balance')
  })






})