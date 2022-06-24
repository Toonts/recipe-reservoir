"use strict";
// Render all recipes from storage

// Add delete buttons to recipes

// const table = document.getElementById('recipeData');
// table.addEventListener('click', removeIngredients);

function showIngredients() {
  let tableBody = document.getElementById('recipeData') // Trying to find table body
  
  for (let i = 0; i < this.ingredients.length; i++) {
    let ingredient = this.ingredients[i];
    let ingredientType = document.createElement('td');
    let ingredientDelete = document.createElement('td');
    
    ingredientType.innerText = this.ingredients[i];
    ingredientDelete.innerText = 'X';
    ingredientDelete.id = i;

    tableRow.appendChild(ingredientType);
    tableRow.appendChild(ingredientDelete);
    tableBody.appendChild(tableRow);
  }
};

function renderIngredients() {
  showIngredients();
}
console.log(this.ingredients);
// let recipe3 = new Recipe ('cake', 'rake', 'bake');
  
  