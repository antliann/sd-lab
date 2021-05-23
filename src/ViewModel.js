import React, {useState} from 'react';

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [productsOfRecipe, setProductsOfRecipe] = useState([]);
    const [top5, setTop5] = useState([]);

    function handleAddProduct(){

    }

    function handleSaveRecipe(){

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
                    <li key={'prod' + index}>item</li>
                )}
                </div>
            </div>
            <div id="top-5">
                <h2>Top 5 Recipes</h2>
                {top5.map((item, index) =>
                    <li key={'top' + index}>item</li>
                )}
            </div>
        </div>
    );
}

export default App;
