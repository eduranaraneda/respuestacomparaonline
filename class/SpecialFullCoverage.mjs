var Product = require("./Product.mjs");

class SpecialFullCoverage extends Product {
  constructor(name, sellIn, price) 
  {
    super(name, sellIn, price);
  }
    updatePrice()
    {
      super.setSellIn(this.getSellIn() - 1);
      this.increasePrice(this.getSellIn(), super.getPrice());
    }

    increasePrice(days, price)
    {
        if (days < 0)
          super.setPrice(0);
        else if (days < 5)
          super.setPrice(price + 3);
        else if (days <10)
          super.setPrice(price + 2);
        else 
        super.setPrice(price + 1);
    }
    getName() { return super.getName();}
    getSellIn() { return super.getSellIn();}
    getPrice() { return super.getPrice();}
  }

  module.exports = SpecialFullCoverage;