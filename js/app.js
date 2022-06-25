"use strict";
// Create Recipe Constructor function

// Save to and load from Local Storage
let allRecipes = [];
let titleArray = [];
let ingredientsArray = [];
let instructionsArray = [];

//tbd if there should be separate arrays for parameters
const Recipe = function(items) {
  this.items = items;
  allRecipes.push(this);
}

const RecipeList = function(title, ingredients, instructions) {
  this.title = title;
  this.ingredients = ingredients;
  this.instructions = instructions;
  titleArray.push(this.title);
  ingredientsArray.push(this.ingredients);
  instructionsArray.push(this.instructions)
};

RecipeList.prototype.addItem = function(title, ingredients, instructions) {
  let newRecipe = new RecipeList(title, ingredients, instructions);
  this.items.push(newRecipe);
};

Recipe.prototype.saveTitle = function () {
  let stringify1 = JSON.stringify (this.title);
  localStorage.setItem("recipetitle", stringify1); 
}
Recipe.prototype.saveIngredients = function () {
  let stringify2 = JSON.stringify (this.ingredients);
  localStorage.setItem("recipeingredients", stringify2); 
}
Recipe.prototype.saveInstrunctions = function () {
  let stringify3 = JSON.stringify (this.instructions); 
  localStorage.setItem("recipeinstructions", stringify3); 
}

let recipe1 = new RecipeList("cake", "rake", "bake");
let recipe2 = new RecipeList("cookie", "salmon", "pat");
console.log(titleArray);
console.log(ingredientsArray);
//save
Recipe.prototype.saveAllToLocalStorage = function () {
  let stringify = JSON.stringify(this.list);
  localStorage.setItem("recipebook", stringify);
};

//load
Recipe.prototype.loadFromLocalStorage = function () {
  let loadRecipe = JSON.parse(localStorage.getItem("recipebook")) || [];
   let recipe = new Recipe(loadRecipe);
  allRecipes.push(recipe); 
};

//new recipe



//console.log(allRecipes);

allRecipes[0].saveAllToLocalStorage();
// for (let i = 0; i < 5; i++){
//   let recipe = allRecipes[i]; 
//   recipe.loadFromLocalStorage(); 
//   console.log(recipe); 
// }

