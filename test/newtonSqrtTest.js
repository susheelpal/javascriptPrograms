
let assert = require('assert');
let callFunction = require('../mochaTestingPrograms/newtonSqrt/newtonSqrtBL');

describe("Square root of ", () => {
    it("passed", () => {
        assert.equal(callFunction.sqrt(100), 10);
    });
    it("passed", () => {
        assert.equal(callFunction.sqrt(144), 12);
    });

});
