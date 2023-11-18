let { assert } = require("chai");
let { isOddOrEven } = require("../02.evenOrOdd");

describe("test with incorrect data", ()=>{
    it("test with object", ()=>{
        assert.equal(isOddOrEven({prop: "Pesho"}, undefined, "return value must be undefined"))
    })
    it("test with array", ()=>{
        assert.equal(isOddOrEven(["Pesho"], undefined, "return value must be undefined"))
    })
    it("test with number", ()=>{
        assert.equal(isOddOrEven(10, undefined, "return value must be undefined"))
    })
})

describe("test with correct data", ()=>{
    it("test with even word", ()=>{
        assert.equal(isOddOrEven("toto"), "even", "return value to be equal to 'even'");
        assert.equal(isOddOrEven("2222"), "even", "return value to be equal to 'even'");
        assert.equal(isOddOrEven("[]"), "even", "return value to be equal to 'even'");
    })
    it("test with odd word", ()=>{
        assert.equal(isOddOrEven("tot"), "odd", "return value to be equal to 'odd'");
        assert.equal(isOddOrEven("222"), "odd", "return value to be equal to 'odd'");
        assert.equal(isOddOrEven("[1]"), "odd", "return value to be equal to 'odd'");
    })
    
})
