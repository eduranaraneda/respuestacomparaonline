class Product {
    constructor(name, sellIn, price) {
      this.name = name;
      this.sellIn = sellIn;
      this.price = price;
    }
    

    getName() { return this.name;}
    getSellIn() { return this.sellIn;}
    getPrice() { return this.price;}

    setSellIn(value) 
      { this.sellIn=value;}

    setPrice(value) 
      { 
          if (value <0)
                value = 0;
          if (value>50)
                value = 50;
          this.price = value;
      }

    decreasePrice(value) { 
      if (value<0)
        this.setPrice(this.getPrice()-2);
      else
        this.setPrice(this.getPrice()-1);
    }
    updatePrice()
    {
      this.setSellIn(this.getSellIn() - 1);
      this.decreasePrice(this.getSellIn());
    }
}
  module.exports = Product; 