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
    let rating = document.createElement('th');

    remove.innerText = 'x';
    remove.className = i;
    title.innerText = recipe.title;
    title.className = i;
    ingredients.innerText = recipe.ingredients;
    ingredients.setAttribute('align', 'center');
    ingredients.className = i;
    instructions.innerText = recipe.instructions;
    instructions.className = i;
    rating.innerText = 'Click to Rate'
    rating.id = i;

    newRecipe.appendChild(remove);
    newRecipe.appendChild(title);
    newRecipe.appendChild(ingredients);
    newRecipe.appendChild(instructions);
    newRecipe.appendChild(rating);
    bodyContainer.appendChild(newRecipe);
    //Event listener
    remove.addEventListener('click', removeRecipe);
    rating.addEventListener('click', rateRecipe);
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
}

function rateRecipe(event){
  event.preventDefault();
  let userRating = prompt('Rate this recipe 1-5');
    if (userRating < 1 || userRating > 5){
      userRating = prompt('Rate this recipe 1-5');
    }
  for(let i = 0; i < allRecipes.length; i++){
    let ratingContainer = document.getElementById(i);
    if (ratingContainer.id == event.target.id){
      event.target.innerText = userRating;
    }
  }
}

renderRecipe();
