const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
let onlineStore = require("../onlineStore");

describe("Tests for onlineStore", function() {
    describe("isProductAvailable", function() {
      it("should return out of stock message when stockQuantity is 0", function() {
        const result = onlineStore.isProductAvailable('Laptop', 0);
        assert.equal(result, 'Sorry, Laptop is currently out of stock.');
      });
  
      it("should return available message when stockQuantity is greater than 0", function() {
        const result = onlineStore.isProductAvailable('Headphones', 10);
        assert.equal(result, 'Great! Headphones is available for purchase.');
      });
  
      it("should throw an error for invalid input", function() {
        assert.throws(() => {
          onlineStore.isProductAvailable(null, 5);
        }, Error, "Invalid input.");
      });
    });
  
    describe("canAffordProduct", function() {
      it("should return purchase message when product can be afforded", function() {
        const result = onlineStore.canAffordProduct(500, 1000);
        assert.equal(result, 'Product purchased. Your remaining balance is $500.');
      });
  
      it("should return insufficient funds message when product can't be afforded", function() {
        const result = onlineStore.canAffordProduct(1000, 500);
        assert.equal(result, "You don't have sufficient funds to buy this product.");
      });
  
      it("should throw an error for invalid input", function() {
        assert.throws(() => {
          onlineStore.canAffordProduct(500, 'balance');
        }, Error, "Invalid input.");
      });
    });
  
    describe("getRecommendedProducts", function() {
      const productList = [
        { name: 'Camera', category: 'Photography' },
        { name: 'Laptop', category: 'Electronics' },
        { name: 'Headphones', category: 'Electronics' },
      ];
  
      it("should return recommended products in a category", function() {
        const result = onlineStore.getRecommendedProducts(productList, 'Electronics');
        assert.equal(result, 'Recommended products in the Electronics category: Laptop, Headphones');
      });
  
      it("should return no recommended products message for a category with no matches", function() {
        const result = onlineStore.getRecommendedProducts(productList, 'Books');
        assert.equal(result, 'Sorry, we currently have no recommended products in the Books category.');
      });
  
      it("should throw an error for invalid input", function() {
        assert.throws(() => {
          onlineStore.getRecommendedProducts(null, 'Electronics');
        }, Error, "Invalid input.");
      });
    });
  });
