
const fs = require('fs');

const result = './test/ed_products_after_30_days.txt';
const base = './test/products_after_30_days.txt';

var Product = require("./../class/Product.mjs");
var FullCoverage = require("./../class/FullCoverage.mjs");
var MegaCoverage = require("./../class/MegaCoverage.mjs");
var SpecialFullCoverage = require("./../class/SpecialFullCoverage.mjs");
var SuperSale = require("./../class/SuperSale.mjs");

var CarInsurance = require("./../class/CarInsurance.mjs");

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
  var stream = fs.createWriteStream(result, {flags: 'w'});
  
  

  const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    stream.write(`${product.getName()}, ${product.getSellIn()}, ${product.getPrice()}\r\n`);
  };
  
  stream.write(`-------- day 0 --------\r\n`);
  stream.write('name, sellIn, price\r\n');
  carInsurance.BootValues().forEach(productPrinter);
  stream.write(`\r\n`);

  for (let i = 1; i <= 30; i += 1) {
    stream.write(`-------- day ${i} --------\r\n`);
    stream.write('name, sellIn, price\r\n');
    carInsurance.updatePrice().forEach(productPrinter);
    stream.write(`\r\n`);
  }

  stream.end();

  productsAtDayZero = [];
  
  "use strict";
  var chai = require('chai');
  var chaiFiles = require('chai-files');

  chai.use(chaiFiles);
  
  var expect = chai.expect;
  var file = chaiFiles.file;
try
{
  console.log( expect(file(base)).to.exist ? "Archivo base encontrado." : "Archivo base inexistente.\n Test falló.");
  console.log( expect(file(result)).to.exist ? "Archivo resultado encontrado." : "Archivo Resultado inexistente.\n Test falló.");
  console.log( expect(file(result)).to.be.equal(file(base)) ? 'Test OK!!' : 'Test falló!!\n archivos son diferentes.!!');

}
catch{console.log("falló el test.")}

