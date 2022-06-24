"use strict";
// Call save & load when recipes are searched for

// Render list of searched recipes

// Pull info from form into constructor function and save (put form in index.html)

function render (){
  let table = document.getElementById ("table");
  for (let i=0; i < allRecipes.length; i++){
    let recipe = allRecipes[i];
    let tableRow = document.createElement ("tr");
    let tableData = document.createElement ("td");
    tableData.innerText = recipe.title;
  
  }

}