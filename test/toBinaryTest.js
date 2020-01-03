
let assert = require('assert');
let callFunction = require('../mochaTestingPrograms/toBinary/toBinaryBL');

describe("decimal to binary converter", () => {
    it("passed", () => {
        assert.equal(callFunction.toBinary(10), 1010);
    });
    it("passed", () => {
        assert.equal(callFunction.toBinary(5), 101);
    });

});
