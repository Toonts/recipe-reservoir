"use strict";
// Create Recipe Constructor function

let allRecipes = [];

const Recipe = function(title, ingredients, instructions) {
  this.title = title;
  this.ingredients = ingredients;
  this.instructions = instructions;
  allRecipes.push(this);
};

// let recipe1 = new Recipe("cake", "rake", "bake");
// let recipe2 = new Recipe("cookie", "salmon", "pat");

//save
Recipe.prototype.saveAllToLocalStorage = function () {
  localStorage.setItem('recipebook', JSON.stringify(allRecipes));
};

// Load from storage

function loadFromLocalStorage() {
  let loadRecipe = JSON.parse(localStorage.getItem('recipebook')) || [];
  allRecipes = loadRecipe;
}

//Remove one recipe from allRecipes



loadFromLocalStorage();


