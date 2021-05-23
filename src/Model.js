function formatCase(word) {
    return word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
}


function calculateTopFive(previousTopFive, newRecipe) {
    return [];
}

function recipeNameExists(newRecipe, allRecipes) {
    return false;
}

export {formatCase, calculateTopFive, recipeNameExists}