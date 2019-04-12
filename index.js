function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient',function(){
    return new Handlebars.SafeString(
      "<li name='ingredientsList'>"+this.name+"</li>"
    );
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
  let ingredients = document.getElementsByClassName('ingredients');
  for(let i=0;i< NodeElement.length; i++){
    if(NodeElement[i].value){
      recipe.ingredients.push({name: NodeElement[i].value})}
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
  let recipe = {ingredients:[],formLegend: "Edit Recipe", submitFunction: 'updateRecipe()'};
  recipe.name = document.getElementById("recipeName").innerText;
  recipe.description = document.getElementById("recipeDescription").innerText;
  let NodeElement = document.getElementsByName("ingredientsList")

  for(let i=0;i< NodeElement.length; i++){
      recipe.ingredients.push({name: NodeElement[i].innerText})
  }

  let recipeFormTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementById('main').innerHTML = recipeFormTemplateFn( recipe );
}
