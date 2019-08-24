# Bank Tech Test

A redo of a previous tech test challenge. Previously I had done it all in Ruby. This time I am attempting it in Javascript (Node) and using a new test framework - Jest.

# Requirements
- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).


# Acceptance Criteria
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see
```
date || credit || debit || balance
14/1/2012 || || 500.00 || 2500.00
13/1/2012 || 2000.00 || || 3000.00
10/1/2012 || 1000.00 || || 1000.00
```
#To Run
**Setup**  
In the main project folder please run `npm install`  
**Tests**  
In the main project folder please run `npm test`  
There is currently `100%` test coverage.
**Program**  
Please use a REPL (node) and try the following example:
```
const Account = require('./src/Account')
account = new Account()
account.deposit(1000)
account.deposit(2000)
account.deposit(3000)
account.withdraw(1500)
account.statement()
```

This will give the example output of:
```
date || credit || debit || balance
24/8/2019 || || 1500.00 || 4500.00
24/8/2019 || 3000.00 || || 6000.00
24/8/2019 || 2000.00 || || 3000.00
24/8/2019 || 1000.00 || || 1000.00
```


#Thoughts along the way
- This was my first attempt in writing anything in an ES6 synatax, using the Jest testing framework and using node. In the end it was ok but......... it was a problem I knew and so I concentrated more on how the Jest framework and JS works more than anything else - I copied the design from the ruby version I had done before.
- As the design was the same as the ruby one the thoughts on the design are the same.
- I took a (smelly) shortcut at the end and just reversed the transactions array in statement printer as oppossed to writing a proper sort method. A refactor here at some point
- I am still not 100% comfortable with mocking in Jest. Got something working but can't say I understand it 100%.
