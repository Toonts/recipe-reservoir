"use strict";
//Adding event listeners

const input1 = document.getElementById("name");
const input2 = document.getElementById("ingredients");
const input3 = document.getElementById("rating");
const form = document.getElementById("newrecipes");

//Search Event Listeners
input1.addEventListener("keypress", searchTitle);
input2.addEventListener("keypress", searchIngredient);
input3.addEventListener("keypress", searchRating);

function searchTitle(event) {
  let table = document.getElementById("tbody");
  let nameValue = document.getElementById("name").value;
  if (event.key === "Enter") {
    event.preventDefault();
    table.innerHTML = "";
    for (let i = 0; i < allRecipes.length; i++) {
      let recipe = allRecipes[i];
      if (recipe.title.toLowerCase().includes(nameValue.toLowerCase())) {
        let tableRow = document.createElement("tr");
        let tableData = document.createElement("td");
        tableData.innerText = recipe.title + "\n \n" + "Ingredients: " + "\n" + recipe.ingredients + "\n \n"+ "Instructions: " + "\n" + recipe.instructions;
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
      if (recipe.ingredients.toLowerCase().includes(ingredientValue.toLowerCase())) {
        let tableRow = document.createElement("tr");
        let tableData = document.createElement("td");
        tableData.innerText = recipe.title + "\n \n" + "Ingredients: " + "\n" + recipe.ingredients + "\n \n"+ "Instructions: " + "\n" + recipe.instructions;
        tableRow.appendChild(tableData);
        table.appendChild(tableRow);
      }
    }
  }
}

function searchRating(event) {
  let table = document.getElementById('tbody');
  let ratingValue = document.getElementById('rating').value;
  if(event.key === "Enter"){
    event.preventDefault();
    table.innerHTML = "";
    for(let i = 0; i < allRecipes.length; i++){
      let recipe = allRecipes[i];
      if (recipe.rating.includes(ratingValue)){
        let tableRow = document.createElement("tr");
        let tableData = document.createElement("td");
        tableData.innerText = recipe.title + "\n \n" + "Ingredients: " + "\n" + recipe.ingredients + "\n \n"+ "Instructions: " + "\n" + recipe.instructions;
        tableRow.appendChild(tableData);
        table.appendChild(tableRow);
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
      let recipeRating = id.rating.value;
  
      let newRecipe = new Recipe(
        recipeTitle,
        recipeIngredients,
        recipeInstructions,
        recipeRating,
      );
    newRecipe.saveAllToLocalStorage();

      let inputs = document.querySelectorAll('#title, #new-ingredients, #instructions, #rating')

      inputs.forEach(input => {
        input.value = '';
      });

    }

form.addEventListener("submit", formSubmit);
