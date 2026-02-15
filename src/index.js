function generateRecipe(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");

  new Typewriter("#recipe", {
    strings: "Dark Chocolate",
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });

  alert("generating recipe");
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
