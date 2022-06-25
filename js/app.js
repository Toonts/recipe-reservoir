"use strict";
// Create Recipe Constructor function

// Save to and load from Local Storage
let allRecipes = [];
//let allInstructions = [];

//tbd if there should be separate arrays for parameters
const Recipe = function (title, ingredients, instructions) {
  this.title = title;
  this.ingredients = ingredients;
  this.instructions = instructions;
  allRecipes.push(this);
};

Recipe.prototype.saveEachToLocalStorage = function (){
  let stringify1 = JSON.stringify (this.title); 
  let stringify2 = JSON.stringify (this.ingredients); 
  let stringify3 = JSON.stringify (this.instructions); 
  localStorage.setItem("recipetitle", stringify1); 
  localStorage.setItem("recipeingredients", stringify2); 
  localStorage.setItem("recipeinstructions", stringify3); 

}; 

let recipe1 = new Recipe("cake", "rake", "bake");
let recipe2 = new Recipe("cookie", "salmon", "pat");

//save
Recipe.prototype.saveAllToLocalStorage = function () {
  let stringify = JSON.stringify(allRecipes);
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

Recipe.prototype.removeItem = function (){
  let index = this.allRecipes.indexOf(recipe); 
  this.allRecipes.splice (index, 1); 
}

