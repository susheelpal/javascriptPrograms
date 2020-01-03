
let assert = require('assert');
let callFunction = require('../mochaTestingPrograms/temperatureConversion/temperatureConversionBL');

describe("tempreture converter", () => {
    it("passed", () => {
        assert.equal(callFunction.celToFarh(100), 212);
    });
    it("passed", () => {
        assert.equal(callFunction.farhToCel(100), 37.77777777777778);
    });

});
