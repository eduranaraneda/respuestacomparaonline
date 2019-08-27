var Product = require("./Product.mjs");

class FullCoverage extends Product {
  constructor(name, sellIn, price) 
  {
    super(name, sellIn, price);
  }
    updatePrice()
    { /* método que solicita actualizar el tiempo de venta e incrementar el precio de acuerdo a las definiciones de Full Coverage */
      super.setSellIn(this.getSellIn() - 1);
      this.increasePrice(this.getSellIn(), super.getPrice());
    }

    increasePrice(days, price)
    { /* método que incrementa el precio de acuerdo a las definiciones de Full Coverage */
      if (days < 0)
        super.setPrice(price + 2)
      else 
        super.setPrice(price + 1)
    }

    /* métodos de lectura de propiedades de clase extendida */
    getName() { return super.getName();}
    getSellIn() { return super.getSellIn();}
    getPrice() { return super.getPrice();}
  }

  module.exports = FullCoverage;