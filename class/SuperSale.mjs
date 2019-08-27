var Product = require("./Product.mjs");
var decreaseFactor = 2;

class SuperSale extends Product {
  constructor(name, sellIn, price) 
  {
    super(name, sellIn, price);
  }
    updatePrice()
    {
      super.setSellIn(this.getSellIn() - 1);
      this.decreasePrice(super.getPrice());
    }

    decreasePrice(value) { 
      if (value<0)
        super.setPrice(this.getPrice()-(2*decreaseFactor));
      else
        super.setPrice(this.getPrice()-(1*decreaseFactor));
    }

    getName() { return super.getName();}
    getSellIn() { return super.getSellIn();}
    getPrice() { return super.getPrice();}
  }

  module.exports = SuperSale;