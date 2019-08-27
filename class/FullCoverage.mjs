var Product = require("./Product.mjs");

class FullCoverage extends Product {
  constructor(name, sellIn, price) 
  {
    super(name, sellIn, price);
  }
    updatePrice()
    {
      super.setSellIn(this.getSellIn() - 1);
      this.increasePrice(super.getPrice());
    }

    increasePrice(value)
    {
        super.setPrice(value + 1)
    }
    getName() { return super.getName();}
    getSellIn() { return super.getSellIn();}
    getPrice() { return super.getPrice();}
  }

  module.exports = FullCoverage;