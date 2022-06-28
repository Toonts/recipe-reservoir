"use strict";
// Call save & load when recipes are searched for

// Render list of searched recipes

// Pull info from form into constructor function and save (put form in index.html)

//Adding event listeners

const input1 = document.getElementById("name");
const input2 = document.getElementById("ingredients");
const input3 = document.getElementById("rating");
const form = document.getElementById("newrecipes");
let ingredientsValue = document.getElementById("ingredients").value;


//Search Event Listeners
input1.addEventListener("keypress", searchTitle);
input2.addEventListener("keypress", searchIngredient);

function searchTitle(event) {
  let table = document.getElementById("tbody");
  let nameValue = document.getElementById("name").value;
  if (event.key === "Enter") {
    event.preventDefault();
    table.innerHTML = "";
    for (let i = 0; i < allRecipes.length; i++) {
      let recipe = allRecipes[i];
      if (recipe.title.includes(nameValue)) {
        let tableRow = document.createElement("tr");
        let tableData = document.createElement("td");
        tableData.innerText = recipe.title + recipe.ingredients + recipe.instructions;
        tableRow.appendChild(tableData);
        table.appendChild(tableRow);
      }
    }
  }
}

function searchIngredient(event) {
  let table = document.getElementById("tbody");
  let ingredientValue = document.getElementById("ingredients").value;
  if (event.key === "Enter") {
    event.preventDefault();
    table.innerHTML = "";
    for (let i = 0; i < allRecipes.length; i++) {
      let recipe = allRecipes[i];
      if (recipe.ingredients.includes(ingredientValue)) {
        let tableBody = document.createElement("tbody");
        let tableRow = document.createElement("tr");
        tableRow.id = i;
        let tableData = document.createElement("td");
        tableData.innerText = recipe.title;
        tableRow.appendChild(tableData);
        tableBody.appendChild(tableRow);
        table.appendChild(tableBody);
      }
    }
  }
}
//Adding new recipes


  function formSubmit(event) {
    event.preventDefault();
      let id = event.target;
      let recipeTitle = id.title.value;
      let recipeIngredients = id.ingredients.value;
      let recipeInstructions = id.instructions.value;
  
      let newRecipe = new Recipe(
        recipeTitle,
        recipeIngredients,
        recipeInstructions,
      );
      
    newRecipe.saveAllToLocalStorage();

      let inputs = document.querySelectorAll('#title, #new-ingredients, #instructions')

      inputs.forEach(input => {
        input.value = '';
      });

    }

  let newRecipe = new Recipe(
    recipeTitle,
    recipeIngredients,
    recipeInstructions
  );
  newRecipe.saveAllToLocalStorage();
}


form.addEventListener("submit", formSubmit);
