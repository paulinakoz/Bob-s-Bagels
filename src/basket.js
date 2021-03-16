class Basket {
    constructor(){
        //this.totalPrice = totalPrice;
        this.contents = [];
    }

    addToBasket(bagel){
        this.contents.push(bagel);
        return this.contents;
    }

    removeFromBasket(bagel){
        this.contents.pop(bagel);
        return this.contents;
    }

};

module.exports = Basket;