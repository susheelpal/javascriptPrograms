/**
 * @module inventoryStoreCalculateRice
 * @module inventoryStoreCalculateWheat
 * @module inventoryStoreCalculatePulses
 */
let fs = require('fs')
let inventory = JSON.parse(fs.readFileSync('inventory.json'));

inventoryStoreCalculateRice = () => {
    for (let i = 0; i < inventory.Rice.length; i++) {
        let name = inventory.Rice[i].Name;
        let weight = inventory.Rice[i].Weight;
        let price = inventory.Rice[i].Price;
        console.log(`Name :${name}`)
        console.log(`Weight :${weight}`)
        console.log(`Price (/kg) :${price}`)
        let totalCost = price * weight;
        console.log(`Total cost :${totalCost}`)
    }
}
inventoryStoreCalculateWheat = () => {
    for (let i = 0; i < inventory.Wheat.length; i++) {
        let name = inventory.Wheat[i].Name;
        let weight = inventory.Wheat[i].Weight;
        let price = inventory.Wheat[i].Price;
        console.log(`Name :${name}`)
        console.log(`Weight :${weight}`)
        console.log(`Price (/kg) :${price}`)
        let totalCost = price * weight;
        console.log(`Total cost :${totalCost}`)
    }
}
inventoryStoreCalculatePulses = () => {
    for (let i = 0; i < inventory.Pulses.length; i++) {
        let name = inventory.Pulses[i].Name;
        let weight = inventory.Pulses[i].Weight;
        let price = inventory.Pulses[i].Price;
        console.log(`Name :${name}`)
        console.log(`Weight :${weight}`)
        console.log(`Price (/kg) :${price}`)
        let totalCost = price * weight;
        console.log(`Total cost :${totalCost}`)
    }
}
module.exports = {
    inventoryStoreCalculateRice,
    inventoryStoreCalculateWheat,
    inventoryStoreCalculatePulses
}
