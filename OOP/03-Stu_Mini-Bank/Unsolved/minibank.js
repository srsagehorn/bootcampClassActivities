function MiniBank(balance) {
  this.balance = balance;
  (this.getBalance = function () {
    return this.balance;
  }),
    (this.printBalance = function () {
      console.log(`Balance: ${this.getBalance()}`);
    });
  this.statement = [this.balance];
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
    for (var i = 0; i <= this.statement; i++) {
      return this.statement[i];
    }
  };
  this.deposit = function (value) {
    updateStatement(value);
    setBalance(value);
  };
  this.withdraw = function (value) {
    updateStatement(-Math.abs(value));
    setBalance(value);
  };
}
