let { assert } = require("chai");
let { mathEnforcer } = require("../04.mathEnforcer");

describe("addFive", ()=>{
    describe("incorrect value", ()=> {
        it("test with String", ()=>{
            assert.equal(mathEnforcer.addFive("pesho"), undefined, "return value undefined")
        })
        it("test with Object", ()=>{
            assert.equal(mathEnforcer.addFive({name: "Todor", age: 43}), undefined, "return value undefined")
        })
        it("test with Array", ()=>{
            assert.equal(mathEnforcer.addFive(["1", "2", "3"]), undefined, "return value undefined")
        })
    })
    describe("correct value", ()=> {
        it("test negative value", ()=>{
            assert.equal(mathEnforcer.addFive(-55), -50, "return value to be 50")
            assert.equal(mathEnforcer.addFive(-3), 2, "return value to be 2")
            assert.equal(mathEnforcer.addFive(-5), 0, "return value to be 0")
            assert.equal(mathEnforcer.addFive(-5.5), -0.5, "return value to be -0.5")
        })
        it("test positive value", ()=>{
            assert.equal(mathEnforcer.addFive(0), 5, "return value to be 5")
            assert.equal(mathEnforcer.addFive(10), 15, "return value to be 15")
            assert.equal(mathEnforcer.addFive(10.5), 15.5, "return value to be 15")
        })
    })
}) 
describe("subtractTen", ()=>{
    describe("incorrect value", ()=> {
        it("test with String", ()=>{
            assert.equal(mathEnforcer.subtractTen("pesho"), undefined, "return value undefined")
        })
        it("test with Object", ()=>{
            assert.equal(mathEnforcer.subtractTen({name: "Todor", age: 43}), undefined, "return value undefined")
        })
        it("test with Array", ()=>{
            assert.equal(mathEnforcer.subtractTen(["1", "2", "3"]), undefined, "return value undefined")
        })
    })
    describe("correct value", ()=> {
        it("test negative value", ()=>{
            assert.equal(mathEnforcer.subtractTen(-10), -20, "return value to be -20")
            assert.equal(mathEnforcer.subtractTen(0), -10, "return value to be -10")
            assert.equal(mathEnforcer.subtractTen(-1.5), -11.5, "return value to be -11.5")
        })
        it("test positive value", ()=>{
            assert.equal(mathEnforcer.subtractTen(10), 0, "return value to be 0")
            assert.equal(mathEnforcer.subtractTen(20), 10, "return value to be 5")
            assert.equal(mathEnforcer.subtractTen(15), 5, "return value to be 15")
            assert.equal(mathEnforcer.subtractTen(15.5), 5.5, "return value to be 5.5")
        })
    })
}) 
describe("sum", ()=>{
    describe("incorrect value", ()=> {
        it("test First", ()=>{
            assert.equal(mathEnforcer.sum("pesho", 10), undefined, "return value undefined")
            assert.equal(mathEnforcer.sum({name: "Todor", age: 43}, 10), undefined, "return value undefined")
            assert.equal(mathEnforcer.sum(["1", "2", "3"], 10), undefined, "return value undefined")
        })
        it("test Second", ()=>{
            assert.equal(mathEnforcer.sum(10, "pesho"), undefined, "return value undefined")
            assert.equal(mathEnforcer.sum(10, {name: "Todor", age: 43}), undefined, "return value undefined")
            assert.equal(mathEnforcer.sum(10, ["1", "2", "3"]), undefined, "return value undefined")
        })
        it("test both", ()=>{
            assert.equal(mathEnforcer.sum([], "pesho"), undefined, "return value undefined")
            assert.equal(mathEnforcer.sum("10", {name: "Todor", age: 43}), undefined, "return value undefined")
            assert.equal(mathEnforcer.sum({name: "Todor", age: 43}, ["1", "2", "3"]), undefined, "return value undefined")
        })
        
    })
    describe("correct value", ()=> {
        it("test negative value", ()=>{
            assert.equal(mathEnforcer.sum(-10, -20), -30, "return value to be -30")
            assert.equal(mathEnforcer.sum(10,-10), 0, "return value to be 0")
            assert.equal(mathEnforcer.sum(-10,10), 0, "return value to be 0")
            assert.equal(mathEnforcer.sum(-10.5,10.5), 0, "return value to be 0")
        })
        it("test positive value", ()=>{
            assert.equal(mathEnforcer.sum(10,20), 30, "return value to be 30")
            assert.equal(mathEnforcer.sum(0,10), 10, "return value to be 10")
            assert.equal(mathEnforcer.sum(10.5,0.5), 11, "return value to be 11")
        })
    })
})
