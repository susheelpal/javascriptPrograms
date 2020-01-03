
let assert = require('assert');
let callFunction = require('../mochaTestingPrograms/monthlyPayment/monthlyPaymentBL');

describe("monthly payment", () => {
    it("payment", () => {
        assert.equal(callFunction.monthlyPayment(2000, 5, 2), 87.74277946813653);
    });
    it("payment1", () => {
        assert.equal(callFunction.monthlyPayment(3000, 5, 2), 131.6141692022048);
    });

});
