var Product = require("./Product.mjs");
var fixedPrice = 80;

class MegaCoverage extends Product {
  constructor(name, sellIn, price) 
  {
    super(name, sellIn, fixedPrice);
  }
    updatePrice()
    {
      /*
      no se indica en el documento, pero segun la prueba entregada nunca cambia el valor de dias faltantes, 
      de ahi que se comento la linea siguiente*/

      //super.setSellIn(this.getSellIn() - 1);
    }

    getName() { return super.getName();}
    getSellIn() { return super.getSellIn();}
    getPrice() { return super.getPrice();}
  }

  module.exports = MegaCoverage;