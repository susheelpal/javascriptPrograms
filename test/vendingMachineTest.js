
let assert = require('assert');
let callFunction = require('../mochaTestingPrograms/vendingMachine/vendingMachineBL');
/**
 * @module testVendingMachine
 */

describe("vendingMachine", () => {
  let amount = 1234;
  let count = [1, 2, 3, 2];

  it("count the notes", () => {
    assert.deepEqual(callFunction.change(amount), count);
  });

});
