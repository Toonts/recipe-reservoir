'use strict';
// Event listener to remove recipes from recipeBook
for (let i = 0; i < allRecipes.length; i++){
  let recipe = allRecipes[i];
  let x = document.getElementById(`${i}`);
  x.addEventListener('click', removeRecipe);
}

// Render all recipes from storage

//load
function loadFromLocalStorage () {
  let recipes = JSON.parse(localStorage.getItem("recipebook")) || [];
   allRecipes = loadRecipe;
};

function showTitle() {
  let recipeDiv = document.getElementById('recipeTitle'); 
  for (let i = 0; i < allRecipes.length; i++) {
    let newEntry = document.createElement('ul');
    let innerUL = document.createElement('ul');

    let titleFormal = document.createElement('li');
    let title = document.createElement('li');
    let deleteTitle = document.createElement ('li');

    deleteTitle.innerText = 'X'; 
    deleteTitle.id = i; 
    titleFormal.textContent = 'Title: ';
    title.textContent = allRecipes[i].title;

    newEntry.appendChild(titleFormal);
    newEntry.appendChild(innerUL);
    innerUL.appendChild(title);
    recipeDiv.appendChild(deleteTitle);
    recipeDiv.appendChild(newEntry);
  }
}

function showIngredients() {
  let recipeDiv = document.getElementById('recipeIngredients');
  for (let i = 0; i < allRecipes.length; i++) {
    let newIngredients = document.createElement('ul');
    let titleFormal = document.createElement('li');
    titleFormal.textContent = 'Ingredients: ';
    let innerUL = document.createElement('ul');
    let ingredients = document.createElement('li');
    ingredients.textContent = allRecipes[i].ingredients;
    innerUL.appendChild(ingredients);
    newIngredients.appendChild(titleFormal);
    newIngredients.appendChild(innerUL);
    recipeDiv.appendChild(newIngredients);
  }
}

function showInstructions() {
  let recipeDiv = document.getElementById('recipeInstructions');
  for (let i = 0; i < allRecipes.length; i++) {
    let newInstructions = document.createElement('ul');
    let titleFormal = document.createElement('li');
    titleFormal.textContent = 'Instructions: ';
    let innerUL = document.createElement('ul');
    let instructions = document.createElement('li');
    instructions.textContent = allRecipes[i].instructions;
    innerUL.appendChild(instructions);
    newInstructions.appendChild(titleFormal);
    newInstructions.appendChild(innerUL);
    recipeDiv.appendChild(newInstructions);
  }
}

function renderIngredients() {
  loadFromLocalStorage();
  showTitle();
  showIngredients();
  showInstructions();
}

// Add delete buttons to recipes

function removeRecipe(event){
  event.preventDefault();
  recipeBook.removeRecipe(event.target.id);
  saveAllToLocalStorage(recipeBook);
  renderIngredients();
}

renderIngredients();




