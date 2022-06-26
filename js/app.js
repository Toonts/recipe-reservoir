"use strict";
// recipe book constructor

const RecipeBook = function(recipes){
  this.recipes = recipes;
}
// create new recipe and add to this.recipes
RecipeBook.prototype.addRecipe = function(title, ingredients, instructions){
  let newRecipe = new Recipe (title, ingredients, instructions);
  this.recipes.push(newRecipe);
};

// Save to Local Storage

function saveAllToLocalStorage () {
  localStorage.setItem('recipebook', JSON.stringify(allRecipes));
};

//remove recipe
RecipeBook.prototype.removeRecipe = function(recipe){
  this.recipes.splice(recipe, 1);
};

//ProductConstructor  =========================================================

const Recipe = function(title, ingredients, instructions) {
  this.title = title;
  this.ingredients = ingredients;
  this.instructions = instructions;
  allRecipes.push(this);
};

//==========================+++++++++++++++++++++==============================

let allRecipes = [];




