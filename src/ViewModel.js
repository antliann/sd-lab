import React, {useEffect, useState} from 'react';
import {formatCase, calculateTopFive, recipeNameExists, setTopProductsInRecipes} from "./Model";

function App() {
    const [allProducts, setAllProducts] = useState(['Milk', 'Onion', 'Potato', 'Sugar']);
    const [productsOfRecipe, setProductsOfRecipe] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [topFive, setTopFive] = useState([]);

    const [productInput, setProductInput] = useState('');
    const [userNameInput, setUserNameInput] = useState('');
    const [recipeNameInput, setRecipeNameInput] = useState('');

    function handleAddProduct(product) {
        product = formatCase(product);
        if (!allProducts.includes(product))
            setAllProducts([...allProducts, product].sort());

        productsOfRecipe.includes(product) ?
            alert('This product is already in recipe!') :
            setProductsOfRecipe([product, ...productsOfRecipe]);
        setProductInput('');
    }

    function handleSaveRecipe() {
        const today = new Date();
        const newRecipe = {
            userName: userNameInput,
            recipeName: recipeNameInput,
            dateTime:
                (today.getMonth() + 1) + '/' +
                today.getDate() + '/' +
                today.getFullYear() + ' ' +
                today.getHours() + ':' +
                today.getMinutes(),
            products: productsOfRecipe
        }

        if (recipeNameExists(newRecipe, allRecipes) &&
            alert('Such recipe name already exists!'))
            return;

        setUserNameInput('');
        setRecipeNameInput('');
        setProductInput('');
        setProductsOfRecipe([]);
        setAllRecipes([newRecipe, ...allRecipes].sort((a, b) => a.dateTime - b.dateTime));

        const newTopFive = calculateTopFive(topFive, newRecipe);
        setTopFive(newTopFive);
    }

    useEffect(() => {
        setTopFive(setTopProductsInRecipes(allProducts, allRecipes, topFive));
    }, [allRecipes]);

    return (
        <div id="view">
            <div id="top-5">
                <h2>Top 5 Recipes</h2>
                <ul>
                    {topFive.map((recipe) =>
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
                    )}
                </ul>
            </div>
            <div id="new-recipe">
                <h2>New Recipe</h2>
                <input
                    id="user-name-input"
                    type="text"
                    value={userNameInput}
                    placeholder="Your Name"
                    onChange={({target}) => setUserNameInput(target.value)}/>
                <br/>
                <input
                    id="recipe-name-input"
                    type="text"
                    value={recipeNameInput}
                    placeholder="Recipe Name"
                    onChange={({target}) => setRecipeNameInput(target.value)}/>
                <br/>
                <input
                    id="product-input"
                    type="text"
                    list="products-list"
                    value={productInput}
                    placeholder="Add product..."
                    onChange={({target}) => setProductInput(target.value)}/>
                <datalist id="products-list">{allProducts.map((item) =>
                    <option value={item}/>
                )}
                </datalist>
                <button
                    className="add-btn"
                    onClick={() => handleAddProduct(productInput)}
                    disabled={!productInput}
                >
                    Add product
                </button>
                <button
                    className="save-btn"
                    onClick={() => handleSaveRecipe()}
                    disabled={!(userNameInput && recipeNameInput && productsOfRecipe.length)}
                >
                    Save recipe
                </button>
                <div>{productsOfRecipe.map((item) =>
                    <li key={'prod_' + item} className="products">{item}</li>
                )}
                </div>
            </div>
            <div id="all">
                <h2>All Recipes</h2>
                <ul>
                    {allRecipes.map((recipe) =>
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
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App;
