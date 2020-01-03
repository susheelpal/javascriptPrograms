
let assert = require('assert');
let callFunction = require('../mochaTestingPrograms/nibbleSwap/nibbleSwapBL');

describe("nibble swap test ", () => {
    it("passed", () => {
        assert.equal(callFunction.swapNibble(10), 160);
    });
    it("passed", () => {
        assert.equal(callFunction.swapNibble(75), 180);
    });

});
