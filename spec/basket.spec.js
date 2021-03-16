const assertEquals = require('./test-framework.js');
const Basket = require('../src/basket.js');
const Bagel = require('../src/bagel.js');

//Object | Message | properties | Output
//Basket | addToBasket(bagel) | array | Bagel 

//Test 1
console.log('Checks if bagel is added to basket.')
//Setup 
let basket = new Basket();
let bagel = new Bagel('plain');

//Execute
let result = basket.addToBasket(bagel);

//Verify
assertEquals(result.length, 1);


//Object | Message | properties | Output
//Basket | removeFromBasket(bagel) | array | Bagel 

//Test 2
console.log('Checks if bagel if removed from basket.')
//Setup

//Execute
result = basket.removeFromBasket(bagel);

//Verify
assertEquals(result.length, 0);
