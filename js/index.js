"use strict";
// Call save & load when recipes are searched for

// Render list of searched recipes

// Pull info from form into constructor function and save (put form in index.html)

//add event listeners
const input1 = document.getElementById('name');
const input2 = document.getElementById('ingredients');
const input3 = document.getElementById('rating');
const input4 = document.getElementById('title');
const input5 = document.getElementById('new-ingredients');
const input6 = document.getElementById('instructions');
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
input4.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let nameValue = document.getElementById('title').value;
    console.log(nameValue);
  }
});
input5.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let nameValue = document.getElementById('new-ingredients').value;
    console.log(nameValue);
  }
});
input6.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let nameValue = document.getElementById('instructions').value;
    console.log(nameValue);
  }
});


function render (){
  let table = document.getElementById ("table");
  for (let i=0; i < allRecipes.length; i++){
    let recipe = allRecipes[i];
    let tableRow = document.createElement ("tr");
    let tableData = document.createElement ("td");
    tableData.innerText = recipe.title;
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  }
}

