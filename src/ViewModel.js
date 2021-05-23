import React, {useState} from 'react';
import {formatCase, calculateTopFive, recipeNameExists} from "./Model";

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
        const newRecipe = {
            userName: userNameInput,
            recipeName: recipeNameInput,
            products: productsOfRecipe
        }

        if (recipeNameExists(newRecipe, allRecipes) &&
            !window.confirm('Such recipe name already exists! Do you want to save it with name ... ?'))
            return;

        setUserNameInput('');
        setRecipeNameInput('');
        setProductInput('');
        setProductsOfRecipe([]);
        setAllRecipes([newRecipe, ...allRecipes]);

        const newTopFive = calculateTopFive(topFive, newRecipe);
        setTopFive(newTopFive);
    }

    return (
        <div id="view">
            <div id="top-5">
                <h2>Top 5 Recipes</h2>
                {topFive.map((item, index) =>
                    <li key={'top' + index}>{item}</li>
                )}
            </div>
            <div id="new-recipe">
                <h2>New Recipe</h2>
                <input
                    type="text"
                    value={userNameInput}
                    placeholder="Your Name"
                    onChange={({target}) => setUserNameInput(target.value)}/>
                <input
                    type="text"
                    value={recipeNameInput}
                    placeholder="Recipe Name"
                    onChange={({target}) => setRecipeNameInput(target.value)}/>
                <input
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
                <div>{productsOfRecipe.map((item, index) =>
                    <li key={'prod' + index}>{item}</li>
                )}
                </div>
            </div>
            <div id="all">
                <h2>All Recipes</h2>
                <ul>
                    {allRecipes.map((item, index) =>
                        <li key={'top' + index}>
                            {item.userName}<br/>
                            {item.recipeName}
                            <ul>
                                {item.products.map((product) =>
                                    <li>{product}</li>
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
