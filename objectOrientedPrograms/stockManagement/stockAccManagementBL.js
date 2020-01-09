
const readline = require('readline-sync');
const fs = require('fs');

/**
 * @module Stock - this stock class has the following property - stock name, number of stock and stock price
 */

class Stock {
    constructor(sName, numberOfStock, sPrice) {
        this.sName = sName;
        this.numberOfStock = numberOfStock;
        this.sPrice = sPrice;
    }
}

/**
 * @module StockManagement - this StockManagement class will work on the properties of stock class and have methods like
 *                           addStock(),printStock(),allStockReport() 
 */

class StockManagement {
    constructor() {
        this.stockDetails = [];
        this.entries = { stockDetails: this.stockDetails };
    }

    /**
     * @module addStock() - this will add the stock object in the stockAcc.json file
     */

    addStock() {
        const sName = readline.question('enter your stock name ');
        const numberOfStock = readline.questionInt('enter the number of stock ');
        const sPrice = readline.questionInt('enter the stock price ');
        let s = new Stock(sName, numberOfStock, sPrice);
        this.entries.stockDetails.push(s);
        fs.writeFileSync('stock.json', JSON.stringify(this.entries));
    }

    /**
     * @module printStock() - this will print the stock objects present in stockAcc.json file
     */

    printStock() {
        const allEntry = JSON.parse(fs.readFileSync('stock.json'));
        console.log(allEntry);
    }

    /**
     * @module allStockReport - calculate the stock value based on stock number. 
     */

    allStockReport() {

        let stockDetails = JSON.parse(fs.readFileSync('stock.json'));
        let totalPrice = 0;
        for (let i = 0; i < stockDetails.stockDetails.length; i++) {
            totalPrice = stockDetails.stockDetails[i].numberOfStock * stockDetails.stockDetails[i].sPrice;
            console.log(`total price of ${stockDetails.stockDetails[i].sName} is ${totalPrice} `);
        }
    }
}

module.exports = {
    StockManagement, Stock
}
