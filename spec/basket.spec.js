const assertEquals = require('./test-framework.js');
const Basket = require('../src/basket.js');
const Bagel = require('../src/bagel.js');

//Object | Message | properties | Output
//Basket | addToBasket(bagel) | array | Bagel 

//TEST 1
console.log('Checks if bagel is added to basket.')
//Setup 
let basket = new Basket();
let bagel = new Bagel('plain');

//Execute
let result = basket.addToBasket(bagel);

//Verify
assertEquals(basket.contents.length, 1);


//Object | Message | properties | Output
//Basket | removeFromBasket(bagel) | array | Bagel 

//TEST 2
console.log('Checks if bagel if removed from basket.')
//Setup
basket = new Basket()
bagel = new Bagel('plain');

//Execute
result = basket.addToBasket(bagel)
result = basket.removeFromBasket(bagel);

//Verify
assertEquals(basket.contents.length, 0);

//TEST 3 
console.log('Checks if basket is full.')
//Setup 
basket = new Basket();
bagel = new Bagel('salmon', 3.99);
bagel2 = new Bagel('salmon', 3.99);
bagel3 = new Bagel('salmon', 3.99);
bagel4 = new Bagel('salmon', 3.99);
bagel5 = new Bagel('salmon', 3.99);

//Execute
basket.addToBasket(bagel);
basket.addToBasket(bagel2);
basket.addToBasket(bagel3);
basket.addToBasket(bagel4);
basket.addToBasket(bagel5);

result = basket.isBasketFull();

//Verify
assertEquals(result, true);


//TEST 4
console.log('Checks if capacity has been increased.')
//Setup
basket = new Basket()

//Execute
result = basket.increaseCapacity();

//Verify
assertEquals(result, 10)


//TEST 5
console.log("Item doesn't exist when trying to remove from basket");
//Setup
basket = new Basket();
bagel = new Bagel('salmon');

//Execute
result = basket.removeFromBasket('salmon');

//Verify
assertEquals(result, 'This item is not in your basket');


//TEST 6
console.log("Check if item is already in the basket");
//Setup
basket = new Basket();
bagel = new Bagel();

//Execute
result = basket.addToBasket('avocado');
result = basket.addToBasket('avocado');

//Verify
assertEquals(result, 'This item is already in your basket');

//TEST 7
console.log("Check the price of bagel before adding to basket");
//Setup
basket = new Basket();
bagel = new Bagel('salmon', 3.99);

//Execute 
result = basket.addToBasket(bagel);

//Verify
assertEquals(result, `Bagel ${bagel.name} - ${bagel.price}, has been added to your basket`)

//TEST 8 
console.log("Checks the total sum of the bagels in my basket")
//Setup
basket = new Basket()
bagel = new Bagel('salmon', 3.50);
bagel2 = new Bagel('egg', 2.50)

//Execute
basket.addToBasket(bagel);
basket.addToBasket(bagel2);

result = basket.subtotal;

//Verify 
assertEquals(result, 6)