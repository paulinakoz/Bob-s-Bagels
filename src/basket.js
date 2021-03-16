let Bagel = require('./bagel.js')

class Basket {
    constructor(){
        //this.totalPrice = totalPrice;
        this.contents = [];
        this.capacity = 5;
        this.isFull = false;
    }

    addToBasket(bagel){
        let price = Bagel.getPrice(bagel)
        console.log(price);

        if(this.contents.includes(bagel)){
            this.contents.push(bagel);
            return 'This item is already in your basket'
        } else {
            this.contents.push(bagel);
            return this.contents;
        }
    }

    removeFromBasket(bagel){
        if(this.contents.includes(bagel)){
            this.contents.pop(bagel);
            return this.contents;
        } else {
            return 'This item is not in your basket';
        }
    }

    isBasketFull(){
        if(this.contents.length === this.capacity){
            this.isFull = true;
            return this.isFull;
        } else {
            return this.isFull;
        }
    }

    increaseCapacity(){
        return this.capacity += 5;
    }

};

module.exports = Basket;