"use strict";
// Render all recipes from storage

// Add delete buttons to recipes
// const list = document.getElementById("recipeIngredients");
// list.addEventListener("click", removeIngredientsFromPage);

function showTitle() {
  let recipeDiv = document.getElementById("recipeTitle"); // Trying to find table body
  for (let i = 0; i < allRecipes.length; i++) {
    let newEntry = document.createElement("ul");
    let titleFormal = document.createElement("li");
    titleFormal.textContent = "Title: ";
    let innerUL = document.createElement("ul");
    let title = document.createElement("li");
    let deleteTitle = document.createElement("li");
    title.textContent = allRecipes[i].title;
    innerUL.appendChild(title);
    deleteTitle.innerText = "X";
    deleteTitle.id = i;
    newEntry.appendChild(titleFormal);
    newEntry.appendChild(innerUL);
    recipeDiv.appendChild(deleteTitle);

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

function showIngredients() {
  let recipeDiv = document.getElementById("recipeIngredients");
  for (let i = 0; i < allRecipes.length; i++) {
    let newIngredients = document.createElement("ul");
    let titleFormal = document.createElement("li");
    titleFormal.textContent = "Ingredients: ";
    let innerUL = document.createElement("ul");
    let ingredients = document.createElement("li");
    let deleteIngredients = document.createElement("li");
    ingredients.textContent = allRecipes[i].ingredients;
    innerUL.appendChild(ingredients);
    deleteIngredients.innerText = "X";
    deleteIngredients.id = i;
    newIngredients.appendChild(titleFormal);
    newIngredients.appendChild(innerUL);
    recipeDiv.appendChild(deleteIngredients);

    recipeDiv.appendChild(newIngredients);
  }
}

function showInstructions() {
  let recipeDiv = document.getElementById("recipeInstructions");
  for (let i = 0; i < allRecipes.length; i++) {
    let newInstructions = document.createElement("ul");
    let titleFormal = document.createElement("li");
    titleFormal.textContent = "Instructions: ";
    let innerUL = document.createElement("ul");
    let instructions = document.createElement("li");
    let deleteLink = document.createElement("li");
    instructions.textContent = allRecipes[i].instructions;
    innerUL.appendChild(instructions);
    deleteLink.innerText = "X";
    deleteLink.id = i;
    newInstructions.appendChild(titleFormal);
    newInstructions.appendChild(innerUL);
    recipeDiv.appendChild(deleteLink);

    recipeDiv.appendChild(newInstructions);
  }
}

function renderIngredients() {
  loadFromLocalStorage();
  showTitle();
  showIngredients();
  showInstructions();
}

function loadFromLocalStorage() {
  let loadRecipe = JSON.parse(localStorage.getItem("recipebook")) || [];
  allRecipes = loadRecipe;
}

renderIngredients();

// function removeIngredientsFromPage(event) {
//   event.preventDefault();
//   allRecipes.removeIngredients(event.target.id);
//   allRecipes.saveAllToLocalStorage();
//   renderIngredients();
// }

// function removeIngredients() {
//   let index = allRecipes.indexOf(recipe);
//   allRecipes.splice(index, 1);
// }

//
