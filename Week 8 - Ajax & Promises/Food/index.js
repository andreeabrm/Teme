const searchButton = document.getElementById('search-button');
const ingredientInput = document.getElementById('ingredient-input');
const resultsContainer = document.getElementById('results-container');
const recipeDetailsContainer = document.getElementById('recipe-details');
const popupOverlay = document.getElementById('popup-overlay');
const popupContent = document.getElementById('popup-content');
const closePopup = document.getElementById('close-popup');
const recipePopupDetails = document.getElementById('recipe-popup-details');

searchButton.addEventListener('click', searchRecipes);
closePopup.addEventListener('click', closeRecipePopup);

function searchRecipes() {
  const ingredient = ingredientInput.value;

  resultsContainer.innerHTML = '';

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(response => response.json())
    .then(data => {
      const recipes = data.meals;
      if (recipes) {
        let row = document.createElement('div');
        row.className = 'row';

        recipes.forEach((recipe, index) => {
          const recipeThumbnail = recipe.strMealThumb;
          const recipeName = recipe.strMeal;

          const recipeElement = document.createElement('div');
          recipeElement.className = 'recipe';
          recipeElement.innerHTML = `
            <img src="${recipeThumbnail}">
            <h3>${recipeName}</h3>
            <button data-id="${recipe.idMeal}" class="get-recipe-button">Get Recipe</button>
          `;

          row.appendChild(recipeElement);

          if ((index + 1) % 3 === 0 || index === recipes.length - 1) {
            resultsContainer.appendChild(row);
            row = document.createElement('div');
            row.className = 'row';
          }
        });

        const getRecipeButtons = document.querySelectorAll('.get-recipe-button');
        getRecipeButtons.forEach(button => {
          button.addEventListener('click', () => {
            const recipeId = button.getAttribute('data-id');
            showRecipeDetails(recipeId);
          });
        });
      } else {
        resultsContainer.innerHTML = '<p>No recipes found.</p>';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultsContainer.innerHTML = '<p>An error occurred. Please try again later.</p>';
    });
}

function showRecipeDetails(recipeId) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
    .then(response => response.json())
    .then(data => {
      const recipe = data.meals[0];
      if (recipe) {
        const recipeThumbnail = recipe.strMealThumb;
        const recipeName = recipe.strMeal;
        const recipeInstructions = recipe.strInstructions;

        recipePopupDetails.innerHTML = `
          <h2>${recipeName}</h2>
          <p>${recipeInstructions}</p>
          <img class="popup-image" src="${recipeThumbnail}">
        `;

        popupOverlay.style.display = 'block';
      } else {
        console.error('Recipe not found.');
        recipePopupDetails.innerHTML = '<p>Recipe not found.</p>';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      recipePopupDetails.innerHTML = '<p>An error occurred. Please try again later.</p>';
    });
}


function closeRecipePopup() {
  popupOverlay.style.display = 'none';
}