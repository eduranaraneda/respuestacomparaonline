class Product {
    constructor(name, sellIn, price) {
      this.name = name;
      this.sellIn = sellIn;
      this.price = price;
    }
    
    /*métodos de lectura de propiedades*/
    getName() { return this.name;}
    getSellIn() { return this.sellIn;}
    getPrice() { return this.price;}

    
    setSellIn(value) 
      { /*método para modificar valor de propiedad sellIn */
        this.sellIn=value;
      }

    setPrice(value) 
      { /*método para modificar valor de propiedad price, nunca puede incrementarse más allá de 50. */
          if (value <0)
                value = 0;
          if (value>50)
                value = 50;
          this.price = value;
      }

    decreasePrice(value) 
    {/* método que decrementa el precio de acuerdo a las definición por defecto */ 
      if (value<0)
        this.setPrice(this.getPrice()-2);
      else
        this.setPrice(this.getPrice()-1);
    }
    updatePrice()
    {/* método que solicita actualizar el tiempo de venta e incrementar el precio de acuerdo a las definición por defecto */
      this.setSellIn(this.getSellIn() - 1);
      this.decreasePrice(this.getSellIn());
    }
}
  module.exports = Product; 