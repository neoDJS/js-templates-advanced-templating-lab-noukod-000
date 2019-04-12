function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient',function(){
    let state = document.getElementById('name').value;
    if(state === 'New'){
      return new Handlebars.SafeString(<input name="ingredients" type="text" value=""+this.name+"">);
    } else {
      return new Handlebars.SafeString(this.name);
    }
  });

  let recipeFormTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById('main').innerHTML = recipeFormTemplateFn( );
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function handleSubmit(){}

function getRecipe(){
  let recipe = {ingredients:[]};
  recipe.name = document.getElementById('name').value;
  recipe.description = document.getElementById('description').value;
  let ingredientElem = document.getElementsByName('ingredients');
  for(let i=0;i< ingredientElem.length; i++){
    if(ingredientElem[i].value){
      recipe.ingredients.push({name: ingredientElem[i].value})
    }
  }

  return recipe;
}

function createRecipe(){
  let recipe = getRecipe();
  let recipeTemplateFn = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
  return recipe;
}

function updateRecipe() {
  var recipe = getRecipe()
  let recipeTemplateFn = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  document.getElementById("main").innerHTML = recipeTemplateFn(recipe)
}

function displayEditForm(){
  let recipe = {ingredients:[]};
  recipe.name = document.getElementById("recipeName").innerText;
  recipe.description = document.getElementById("recipeDescription").innerText;
  let ingredientsElem = document.getElementsByName("ingredientName")

  for(let i=0;i< ingredientsElem.length; i++){
      recipe.ingredients.push({name: ingredientsElem[i].innerText})
  }

  let recipeFormTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementById('main').innerHTML = recipeFormTemplateFn( recipe );
}
