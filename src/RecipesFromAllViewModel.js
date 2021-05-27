import React from "react";

export default function RecipesFromAll({allRecipes}) {
    return (
        allRecipes.map((recipe) =>
            <li key={'recipe_' + recipe.recipeName} className="recipe">
                <b>{recipe.recipeName}</b><br/>
                by user {recipe.userName}<br/>
                <i>{recipe.dateTime}</i>
                <ul>
                    {recipe.products.map((product) =>
                        <li key={`${recipe.recipeName}_${product}`}>
                            {product}
                        </li>
                    )}
                </ul>
            </li>
        )
    )
}
