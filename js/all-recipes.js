"use strict";
// Render all recipes from storage

// Add delete buttons to recipes
// Recipe.prototype.render = function (i) {
//   const table = document.getElementById("recipeData");
//   // table.addEventListener('click', removeIngredients);
// };

function showIngredients() {
  let recipeDiv = document.getElementById("recipeData"); // Trying to find table body
  for (let i = 0; i < allRecipes.length; i++) {
    let newEntry = document.createElement("ul"); 
    let titleFormal = document.createElement("li"); 
    titleFormal.textContent = "Title: "; 
    let innerUL = document.createElement("ul"); 
    let title = document.createElement("li"); 
    title.textContent = allRecipes[i].title; 
    innerUL.appendChild(title); 
    newEntry.appendChild(titleFormal); 
    newEntry.appendChild(innerUL); 
  //   for (let j = 0; j < allRecipes[i].ingredients.length; j++) {
  //     let ingredient = ingredients[i];
  //     let ingredientType = document.createElement("td");
  //     let ingredientDelete = document.createElement("td");
  
  //     ingredientType.innerText = this.ingredients[i];
  //     ingredientDelete.innerText = "X";
  //     ingredientDelete.id = i; 
  
  //     tableRow.appendChild(ingredientType);
  //     tableRow.appendChild(ingredientDelete); //list name, then the ingredient, then insructions, then if you make a new Ul and nest it over
  //     tableBody.appendChild(tableRow);
  // }
    recipeDiv.appendChild(newEntry); 
  }
}

function renderIngredients() {
  loadFromLocalStorage();
  showIngredients();
}

function loadFromLocalStorage() {
  let loadRecipe = JSON.parse(localStorage.getItem("recipebook")) || [];
  allRecipes = loadRecipe;
}

renderIngredients();
//console.log(recipe1);
// let recipe3 = new Recipe ('cake', 'rake', 'bake');
