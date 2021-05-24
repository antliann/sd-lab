function formatCase(word) {
    return word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
}


function calculateTopFive(previousTopFive, newRecipe) {
    const newTop = [...previousTopFive, newRecipe].sort((a, b) =>
        b.products.length - a.products.length
    );
    return newTop.length < 6 ? newTop : newTop.slice(0, 5);
    //return [];
}

function recipeNameExists(newRecipe, allRecipes) {
    return allRecipes.some((recipe) => recipe.recipeName === newRecipe.recipeName);
}

export {formatCase, calculateTopFive, recipeNameExists}