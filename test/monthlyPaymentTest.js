
let assert = require('assert');
let callFunction = require('../mochaTestingPrograms/monthlyPayment/monthlyPaymentBL');

describe("monthly payment", () => {
    it("payment", () => {
        assert.equal(callFunction.monthlyPayment(2000, 5, 2), 87.74277946813653);
    });

});
