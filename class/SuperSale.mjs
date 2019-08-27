var Product = require("./Product.mjs");
var decreaseFactor = 2;

class SuperSale extends Product {
  constructor(name, sellIn, price) 
  {
    super(name, sellIn, price);
  }
    updatePrice()
    {/* método que solicita actualizar el tiempo de venta y decrementar el precio de acuerdo a las definiciones de Super Sale */       
      super.setSellIn(this.getSellIn() - 1);
      this.decreasePrice(super.getPrice());
    }

    decreasePrice(value) 
    {/* método que decrementa el precio de acuerdo a las definiciones de Super Sale */ 
      if (value<0)
        super.setPrice(this.getPrice()-(2*decreaseFactor));
      else
        super.setPrice(this.getPrice()-(1*decreaseFactor));
    }

    /* métodos de lectura de propiedades de clase extendida */
    getName() { return super.getName();}
    getSellIn() { return super.getSellIn();}
    getPrice() { return super.getPrice();}
  }

  module.exports = SuperSale;