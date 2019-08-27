
var Product = require("./class/Product.mjs");
var FullCoverage = require("./class/FullCoverage.mjs");
var MegaCoverage = require("./class/MegaCoverage.mjs");
var SpecialFullCoverage = require("./class/SpecialFullCoverage.mjs");
var SuperSale = require("./class/SuperSale.mjs");
var CarInsurance = require("./class/CarInsurance.mjs");

  let productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new FullCoverage('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new MegaCoverage('Mega Coverage', 0, 80),
    new MegaCoverage('Mega Coverage', -1, 80),
    new SpecialFullCoverage('Special Full Coverage', 15, 20),
    new SpecialFullCoverage('Special Full Coverage', 10, 49),
    new SpecialFullCoverage('Special Full Coverage', 5, 49),
    new SuperSale('Super Sale', 3, 6),
  ];
  
  const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    console.log(`${product.getName()}, ${product.getSellIn()}, ${product.getPrice()}`);
  };
  
  for (let i = 1; i <= 30; i += 1) {
    console.log(`********* Day ${i} *********`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log(``);
  }
  
  productsAtDayZero = [];
