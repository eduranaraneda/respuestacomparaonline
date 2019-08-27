var Product = require("./Product.mjs");
var fixedPrice = 80;

class MegaCoverage extends Product {
  constructor(name, sellIn, price) 
  {
    super(name, sellIn, fixedPrice);
  }
    updatePrice()
    { /* método que solicita actualizar el tiempo de venta Mega Coverage 
      
      no se indica en el documento, pero segun la prueba entregada nunca cambia el valor de dias faltantes, 
      de ahi que se comento la linea siguiente */

      //super.setSellIn(this.getSellIn() - 1);
    }
    
    /* métodos de lectura de propiedades de clase extendida */
    getName() { return super.getName();}
    getSellIn() { return super.getSellIn();}
    getPrice() { return super.getPrice();}
  }

  module.exports = MegaCoverage;