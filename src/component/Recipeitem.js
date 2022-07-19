import React from "react";

const Recipeitem = (props) =>{
    const {name, image, ingredientLines}= props;
    return(
              <div class="card py-2 tect-center">
              <img src={image} className="img-fluid mx-auto rounded-circle" />
              <div class="card-body">
              <h5>{name}</h5>
              </div>
              <ul class="list-group list-group-flush">
                  {
                     ingredientLines.map(ingredient => <li className="list-group-item">{ingredient}</li>
                     )}
              </ul>
              </div>  
    )
};

export default Recipeitem;