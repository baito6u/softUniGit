let { assert } = require("chai");
let { recipeSelection } = require("../recipeSelection");
const { it } = require("mocha");

describe('recipeSelection', function() {
    describe('isTypeSuitable', function() {
      it('should return appropriate message for vegetarian', function() {
        const result = recipeSelection.isTypeSuitable('Meat', 'Vegetarian');
        assert.equal(result, 'This recipe is not suitable for vegetarians');
      });
  
      it('should return appropriate message for vegan', function() {
        const result = recipeSelection.isTypeSuitable('Dairy', 'Vegan');
        assert.equal(result, 'This recipe is not suitable for vegans');
      });
  
      it('should return suitable message for other cases', function() {
        const result = recipeSelection.isTypeSuitable('Grains', 'Vegetarian');
        assert.equal(result, 'This recipe is suitable for your dietary restriction');
      });
  
      it('should throw an error for invalid input', function() {
        assert.throws(() => {
          recipeSelection.isTypeSuitable(null, 'Vegetarian');
        }, Error);
      });
    });
  
    describe('isItAffordable', function() {
      it('should return appropriate message for affordable', function() {
        const result = recipeSelection.isItAffordable(50, 100);
        assert.equal(result, 'Recipe ingredients bought. You have 50$ left');
      });
  
      it('should return appropriate message for unaffordable', function() {
        const result = recipeSelection.isItAffordable(100, 50);
        assert.equal(result, "You don't have enough budget to afford this recipe");
      });
  
      it('should throw an error for invalid input', function() {
        assert.throws(() => {
          recipeSelection.isItAffordable(50, 'budget');
        }, Error);
      });
    });
  
    describe('getRecipesByCategory', function() {
      const recipes = [
        { title: 'Recipe 1', category: 'Dessert' },
        { title: 'Recipe 2', category: 'Main Course' },
        { title: 'Recipe 3', category: 'Dessert' }
      ];
  
      it('should return titles of recipes in the specified category', function() {
        const result = recipeSelection.getRecipesByCategory(recipes, 'Dessert');
        assert.deepEqual(result, ['Recipe 1', 'Recipe 3']);
      });
  
      it('should return an empty array for a category with no recipes', function() {
        const result = recipeSelection.getRecipesByCategory(recipes, 'Snacks');
        assert.deepEqual(result, []);
      });
  
      it('should throw an error for invalid input', function() {
        assert.throws(() => {
          recipeSelection.getRecipesByCategory(null, 'Dessert');
        }, Error);
      });
    });
  });