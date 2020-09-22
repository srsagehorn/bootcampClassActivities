// const Toy = require("./toy");

class Store {
  constructor(name, stock, revenue) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  processProductSale(name) {
    const foundToy = this.stock.find((toy) => toy.name === name);
    if (foundToy.count > 0) {
      this.revenue += foundToy.price;
      foundToy.count--;
    } else {
      console.log(`Sorry ${foundToy.name} is out of stock!`);
    }
  }

  replenishStock(name, count) {
    const foundToy = this.stock.find((toy) => toy.name === name);
    foundToy.count += count;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
