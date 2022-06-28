
'use strict';

//Render saved recipes

function renderRecipe() {
  loadFromLocalStorage();
  let bodyContainer = document.getElementById('recipeData');

  for (let i = 0; i < allRecipes.length; i++) {
    let recipe = allRecipes[i];
    let newRecipe = document.createElement('tr');

    let remove = document.createElement('th');
    let title = document.createElement('td');
    let ingredients = document.createElement('td');
    let instructions = document.createElement('td');

    remove.innerText = 'x';
    remove.className = i;
    title.innerText = recipe.title;
    title.className = i;
    ingredients.innerText = recipe.ingredients;
    ingredients.className = i;
    instructions.innerText = recipe.instructions;
    instructions.className = i;

    newRecipe.appendChild(remove);
    newRecipe.appendChild(title);
    newRecipe.appendChild(ingredients);
    newRecipe.appendChild(instructions);
    bodyContainer.appendChild(newRecipe);
    //Event listener
    remove.addEventListener('click', removeRecipe);
  }
}

function removeRecipe(event){
  event.preventDefault();
  let deleteRecipe = document.getElementsByClassName(event.target.className);
  for(let element of deleteRecipe){
    element.innerHTML = null;
  }
  loadFromLocalStorage();

  console.log(allRecipes);
  allRecipes.splice(event.target.className, 1);
  Recipe.prototype.saveAllToLocalStorage();
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


