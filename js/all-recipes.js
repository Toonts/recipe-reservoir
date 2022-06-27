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
    title.innerText = recipe.title;
    ingredients.innerText = recipe.ingredients;
    instructions.innerText = recipe.instructions;

    newRecipe.appendChild(remove);
    newRecipe.appendChild(title);
    newRecipe.appendChild(ingredients);
    newRecipe.appendChild(instructions);
    bodyContainer.appendChild(newRecipe);

    //remove.addEventListener('click', removeRecipe);
  }
}

renderRecipe();
