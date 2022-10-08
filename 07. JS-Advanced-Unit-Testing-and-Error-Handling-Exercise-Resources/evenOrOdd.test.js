let {assert} = require("chai");
let {isOddOrEven} = require("./2.Even or Odd");

describe("OddOrEven functionallity", () => {
it("Result should return undefind" , () => {
    assert.equal(isOddOrEven([]),undefined)
});
it("Result should return undefind", () =>{
assert.equal(isOddOrEven({}),undefined)
});
})
describe("Even functionallity", () => {
it("Result should return even",() => {
assert.equal(isOddOrEven("Pe6o"),"even")
});
it("Result should return odd", ()=>{
    assert.equal(isOddOrEven("Sasho"), "odd")
})
});