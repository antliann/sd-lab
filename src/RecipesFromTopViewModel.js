import React from "react";

export default function RecipesFromTopFive({topFive}) {
    return (
        topFive.map((recipe) =>
            <li key={'top_' + recipe.recipeName} className="recipe">
                <b>{recipe.recipeName}</b><br/>
                by user {recipe.userName}<br/>
                <ul>
                    {recipe.products.map((product) =>
                        <li key={`${recipe.recipeName}_${product}`}>{product}</li>
                    )}
                </ul>
                <i>Top product(s): {recipe.topProducts?.join(', ')}</i>
            </li>
        )
    )
}
