
'use strict';

let bodyContainer = document.getElementById('recipe-head');

let recipeDel = document.createElement('th');
recipeDel.innerText = 'remove recipe'
let recipeName = document.createElement('th');
recipeName.innerText = 'Recipe Name';
let recipeIng = document.createElement('th');
recipeIng.innerText = 'Ingredients';
let recipeInstr = document.createElement('th');
recipeInstr.innerText = 'Instructions';
let recipeRate = document.createElement('th');
recipeRate.innerText = 'Rating';

recipeDel.className = 'recipe-header';
recipeName.className = 'recipe-header';
recipeIng.className = 'recipe-header';
recipeInstr.className = 'recipe-header';
recipeRate.className = 'recipe-header';

bodyContainer.appendChild(recipeDel);
bodyContainer.appendChild(recipeName);
bodyContainer.appendChild(recipeIng);
bodyContainer.appendChild(recipeInstr);
bodyContainer.appendChild(recipeRate);

//Render saved recipes

function renderRecipe() {
  loadFromLocalStorage();
  let bodyContainer = document.getElementById('recipeData');

  for (let i = 0; i < allRecipes.length; i++) {
    let recipe = allRecipes[i];
    let newRecipe = document.createElement('tr');

    let remove = document.createElement('td');
    let button = document.createElement('button');
    let title = document.createElement('td');
    let ingredients = document.createElement('td');
    let instructions = document.createElement('td');
    let rating = document.createElement('td');

    newRecipe.className = 'recipe-row';
    button.innerText = 'remove';
    remove.className = i;
    title.innerText = recipe.title;
    title.className = i;
    ingredients.innerText = recipe.ingredients;
    ingredients.className = i;
    instructions.innerText = recipe.instructions;
    instructions.className = i;
    rating.innerText = recipe.rating;
    rating.className = i;
    rating.id = 'recipe-rate';

    remove.appendChild(button);
    newRecipe.appendChild(remove);
    newRecipe.appendChild(title);
    newRecipe.appendChild(ingredients);
    newRecipe.appendChild(instructions);
    newRecipe.appendChild(rating);
    bodyContainer.appendChild(newRecipe);
    //Event listener
    button.addEventListener('click', removeRecipe);
  }
}

function removeRecipe(event){
  event.preventDefault();
  let deleteRecipe = document.getElementsByClassName(event.target.className);
  for(let element of deleteRecipe){
    element.innerHTML = null;
  }
  loadFromLocalStorage();

  allRecipes.splice(event.target.className, 1);
  Recipe.prototype.saveAllToLocalStorage();
  location.reload();
}

renderRecipe();

function loadFromLocalStorage() {
  let loadRecipe = JSON.parse(localStorage.getItem("recipebook")) || [];
  allRecipes = loadRecipe;
}

 function removeIngredientsFromPage(event) {
   event.preventDefault();
allRecipes.removeIngredients(event.target.id);
  allRecipes.saveAllToLocalStorage();
}

 function removeIngredients() {
let index = allRecipes.indexOf(recipe);
allRecipes.splice(index, 1);
}


