
class CarInsurance 
{
  constructor(products = []) {
    this.products = products;
  }
  
  BootValues() 
  {  /* método que devuelve el estado original de los productos*/
    return this.products;
  }

  updatePrice() 
  { /* método  que actualiza los precios para cada uno de los productos en el arreglo y luego retorna el nuevo estado de los productos  */
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].updatePrice();
    }
    return this.products;
  }
}

  module.exports = CarInsurance;