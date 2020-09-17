function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = function () {
    return this.balance;
  };
  this.setBalance = function (value) {
    this.balance = value;
  };
  this.updateStatement = function (value) {
    this.statement.push(value);
  };
  this.getStatement = function () {
    return this.statement;
  };
  this.printStatement = function () {
    this.statement.forEach((amount) => {
      console.log(amount);
    });
  };
  this.deposit = function (value) {
    this.setBalance(this.balance + value);
    this.updateStatement(this.balance);
  };
  this.printBalance = function () {
    console.log(`Balance: ${this.getBalance()}`);
  };
  // this.withdraw = function (value) {
  //   updateStatement(-Math.abs(value));
  //   setBalance(value);
  // };
}

var bank = new MiniBank(32);
bank.printBalance;
bank.deposit(100);
bank.printBalance;
// bank.withdraw(25);
bank.printBalance;
console.log(bank);

const bank2 = new MiniBank(200);
bank2.deposit(20);
console.log(bank2);
