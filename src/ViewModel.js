function App() {
    return (
        <div id="view">
            <div id="new-recipe">
                <h2>New Recipe</h2>
                <input type="text"/>
                <button className="add-btn">Add product</button>
                <button className="save-btn">Save recipe</button>
                {/* TODO: list of entered products*/}
            </div>
            <div id="top-5">
                <h2>Top 5 Recipes</h2>
            </div>
        </div>
    );
}

export default App;
