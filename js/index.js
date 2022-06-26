"use strict";
//Global

let recipeBook = new RecipeBook([]);

//Adding event listeners

const input1 = document.getElementById('name');
const input2 = document.getElementById('ingredients');
const input3 = document.getElementById('rating');
const form = document.getElementById('newrecipes');
form.addEventListener('submit', formSubmit)

//Search Event Listeners
input1.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let nameValue = document.getElementById('name').value;
    console.log(nameValue);
  }
});
input2.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let nameValue = document.getElementById('ingredients').value;
    console.log(nameValue);
  }
});
input3.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let nameValue = document.getElementById('rating').value;
    console.log(nameValue);
  }
});

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
    
    saveAllToLocalStorage(newRecipe);
}

function render (){
  let table = document.getElementById ("table");
  for (let i = 0; i < allRecipes.length; i++){
    let recipe = allRecipes[i];
    let tableRow = document.createElement ("tr");
    let tableData = document.createElement ("td");
    tableData.innerText = recipe.title;
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  }
}



