"use strict";
// Create Recipe Constructor function

// Save to and load from Local Storage
let allRecipes = [];

//tbd if there should be separate arrays for parameters
const Recipe = function (title, ingredients, instructions) {
  this.title = title;
  this.ingredients = ingredients;
  this.instructions = instructions;
  allRecipes.push(this);
};

//save
Recipe.prototype.saveToLocalStorage = function () {
  let stringify = JSON.stringify(allRecipes);
  localStorage.setItem("recipebook", stringify);
};

//load
Recipe.prototype.loadFromLocalStorage = function () {
  let loadRecipe = JSON.parse(localStorage.getItem("recipebook")) || [];
  recipe = new Recipe(loadRecipe);
};
let recipe1 = new Recipe("cake", "rake", "bake");
console.log(allRecipes);
allRecipes[0].saveToLocalStorage();
