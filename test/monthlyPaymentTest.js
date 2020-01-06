
let assert = require('assert');
let callFunction = require('../mochaTestingPrograms/monthlyPayment/monthlyPaymentBL');

describe("monthly payment", () => {
    it("payment", () => {
        assert.equal(callFunction.monthlyPayment(2000, 5, 2), 88);
    });
    it("payment1", () => {
        assert.equal(callFunction.monthlyPayment(3000, 5, 2), 132);
    });

});
