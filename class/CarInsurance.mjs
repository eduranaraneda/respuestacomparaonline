class CarInsurance {
    constructor(products = []) {
      this.products = products;
    }
    
    BootValues(){
      return this.products;
    }
    updatePrice() {
      for (var i = 0; i < this.products.length; i++) {
        this.products[i].updatePrice();
      }
      return this.products;
    }
  }

  module.exports = CarInsurance;