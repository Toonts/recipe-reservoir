
'use strict';

let bodyContainer = document.getElementById('recipe-head');

let recipeDel = document.createElement('th');
recipeDel.innerText = 'Remove Recipe'
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
    let ratingValue = document.createElement('p');

    newRecipe.className = 'recipe-row';
    button.innerText = 'Remove Recipe';
    button.className = i;
    remove.className = i;
    title.innerText = recipe.title;
    title.className = i;
    title.id = 'append-title';
    ingredients.innerText = recipe.ingredients;
    ingredients.className = i;
    instructions.innerText = recipe.instructions;
    instructions.className = i;
    ratingValue.innerText = recipe.rating;
    rating.className = i;
    ratingValue.id = 'recipe-rate';
    ratingValue.className = i;

    rating.appendChild(ratingValue);
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
  console.log(event.target.className);
  let deleteRecipe = document.getElementsByClassName(event.target.className);
  for(let element of deleteRecipe){
    console.log(element);
    element.innerHTML = null;
  }

  allRecipes.splice(event.target.className, 1);
  console.log(allRecipes);
  Recipe.prototype.saveAllToLocalStorage();
  loadFromLocalStorage();
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


