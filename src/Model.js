function formatCase(word) {
    return word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
}


function calculateTopFive(previousTopFive, newRecipe) {
    const newTop = [...previousTopFive, newRecipe].sort((a, b) =>
        b.products.length - a.products.length
    );
    return newTop.length < 6 ? newTop : newTop.slice(0, 5);
}

function recipeNameExists(recipeName, allRecipes) {
    return allRecipes.some((recipe) => recipe.recipeName === recipeName);
}

function setTopProductsInRecipes(allProducts, allRecipes, topFive) {
    let productsWithQuantity = {};
    allProducts.map((product) => productsWithQuantity[product] = 0)
    allRecipes.map((recipe) => recipe.products.map((product) => productsWithQuantity[product]++));
    const recipesWithTopsCollector = [];
    topFive.map((recipeOriginal) => {
            const recipe = {...recipeOriginal};
            recipe.topProducts = [recipe.products[0]];
            recipe.products.map((product) => {
                    if (productsWithQuantity[product] > productsWithQuantity[recipe.topProducts[0]])
                        recipe.topProducts = [product];
                    else if (!recipe.topProducts.includes(product) &&
                        productsWithQuantity[product] === productsWithQuantity[recipe.topProducts[0]])
                        recipe.topProducts.push(product);
                }
            )
            recipesWithTopsCollector.push(recipe);
        }
    )
    return recipesWithTopsCollector;
}

export {formatCase, calculateTopFive, recipeNameExists, setTopProductsInRecipes}