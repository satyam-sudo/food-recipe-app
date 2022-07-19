import React from "react";
import Recipeitem from "./Recipeitem";

const Recipe = (props)=> {
    const {recipe}=props;
    return(
        <div class="card-columns">
        {
            recipe.map(recipe => <Recipeitem 
            key={Math.random*100}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines} />
            )}   
        </div>
            )
    
}

export default Recipe;