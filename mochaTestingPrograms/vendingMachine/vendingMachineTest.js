
let assert=require('assert');
let callFunction=require('./vendingMachineBL');
/**
 * @module testVendingMachine
 */

 exports.testVendingMachine=()=>{
     describe("pow", ()=> {
     let amount=1234;
     let count=[1,2,3,2];

    it("raises to n-th power", ()=> {
      assert.equal(callFunction.change(amount), count);
    });
  
  });
}