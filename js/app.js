"use strict";
// Create Recipe Constructor function

// Save to and load from Local Storage
let allRecipes = [];
//tbd if there should be separate arrays for parameters

const Recipe = function(title, ingredients, instructions) {
  this.title = title;
  this.ingredients = ingredients;
  this.instructions = instructions;
  allRecipes.push(this);
};

let recipe1 = new Recipe("cake", "rake", "bake");
let recipe2 = new Recipe("cookie", "salmon", "pat");

//save
Recipe.prototype.saveAllToLocalStorage = function () {
  localStorage.setItem('recipebook', JSON.stringify(allRecipes));
};

//load
function loadFromLocalStorage () {
  let loadRecipe = JSON.parse(localStorage.getItem("recipebook")) || [];
   allRecipes = loadRecipe;
};

loadFromLocalStorage();
//new recipe



//console.log(allRecipes);

// allRecipes[0].saveAllToLocalStorage();
// for (let i = 0; i < 5; i++){
//   let recipe = allRecipes[i]; 
//   recipe.loadFromLocalStorage(); 
//   console.log(recipe); 
// }

