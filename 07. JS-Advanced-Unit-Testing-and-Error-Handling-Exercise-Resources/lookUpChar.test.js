let {assert} = require("Chai");
let {lookupChar} = require("./3.LookUpChar")
// o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
// o	If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
// o	If both parameters have correct types and values - return the character at the specified index in the string.

describe("Checking of first and second argument", ()=>{
    it("Result of first param should be undefined",()=>{
        assert.equal(lookupChar(6,6),undefined)
    })
    it("Result of second param should be undefined",()=>{
        assert.equal(lookupChar('6','6'),undefined)
    })
    it("Result of second param should be undefined",()=>{
        assert.equal(lookupChar('6', 0.99),undefined)
    })
    it("Result of second param should be undefined",()=>{
        assert.equal(lookupChar(([]), 1),undefined)
    })
})
describe("Checking of the index of params", ()=>{
    it("Result of equal or biger length should return incorrect index",()=>{
        assert.equal(lookupChar('6',6),"Incorrect index")
    })
    it("Result of negativ index should return incorrect index",()=>{
        assert.equal(lookupChar('6',-6),"Incorrect index")
    })
    it("Result of negativ index should return incorrect index",()=>{
        assert.equal(lookupChar('6', 1),"Incorrect index")
    })
    
})
describe("Checking of correct input data and result should be correct", ()=>{
    it("Correct result",()=>{
        assert.equal(lookupChar('6',0),"6")
    })
    it("Correct result",()=>{
        assert.equal(lookupChar('Atanas',0),"A")
    })
})
