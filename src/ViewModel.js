import React, {useState} from 'react';
import {formatCase, calculateTopFive} from "./Model";

function App() {
    const [allProducts, setAllProducts] = useState(['Milk', 'Onion', 'Potato', 'Sugar']);
    const [productsOfRecipe, setProductsOfRecipe] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [topFive, setTopFive] = useState([]);

    function handleAddProduct(product){
        product = formatCase(product);
        if (!allProducts.includes(product))
            setAllProducts([...allProducts, product].sort());

        productsOfRecipe.includes(product) ?
            alert('This product is already in recipe!') :
            setProductsOfRecipe([product, ...productsOfRecipe]);
    }

    function handleSaveRecipe(newRecipe){
        allRecipes.includes(newRecipe) ?
            alert('Such recipe already exists!') :
            setAllRecipes([...allRecipes, newRecipe.sort()]);

        const newTopFive = calculateTopFive(topFive, newRecipe);
        setTopFive(newTopFive);
    }

    return (
        <div id="view">
            <div id="new-recipe">
                <h2>New Recipe</h2>
                <input type="text" list="products-list"/>
                <datalist id="products-list">{allProducts.map((item) =>
                    <option value={item}/>
                )}
                </datalist>
                <button className="add-btn" onClick={() => handleAddProduct()}>Add product</button>
                <button className="save-btn" onClick={() => handleSaveRecipe()}>Save recipe</button>
                <div>{productsOfRecipe.map((item, index) =>
                    <li key={'prod' + index}>{item}</li>
                )}
                </div>
            </div>
            <div id="top-5">
                <h2>Top 5 Recipes</h2>
                {topFive.map((item, index) =>
                    <li key={'top' + index}>{item}</li>
                )}
            </div>
        </div>
    );
}

export default App;
