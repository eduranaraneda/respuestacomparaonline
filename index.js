//const port = process.env.PORT || 3003;
var Product = require("./class/Product.mjs");
var FullCoverage = require("./class/FullCoverage.mjs");
var CarInsurance = require("./class/CarInsurance.mjs");


//const server = http.createServer((req, res) => {
  
  const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new FullCoverage('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Mega Coverage', -1, 80),
    new Product('Special Full Coverage', 15, 20),
    new Product('Special Full Coverage', 10, 49),
    new Product('Special Full Coverage', 5, 49),
    new Product('Super Sale', 3, 6),
  ];
  
  const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    console.log(`${product.getName()}, ${product.getSellIn()}, ${product.getPrice()}`);
  };
  
  for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    //carInsurance.updatePrice().forEach(productPrinter);
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
  }

  //res.statusCode = 200;
  //res.end('finalizo!\n');
//});

//server.listen(port, () => {
  //console.log(`Server running on http://localhost:${port}/`);
//});
