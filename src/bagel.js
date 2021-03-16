let Basket = require('./basket.js')

class Bagel{
    constructor(){
        this.bagels = { 
            'salmon': 3.99,
            'plain': 0.99,
            'avocado': 4.20,
            'egg': 1.99,
            'nutella': 1.99,
        }
    }

    getPrice(bagel){
        let price = Object.values(this.bagels);
        return price;
    }    
};

module.exports = Bagel;