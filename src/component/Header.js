import React from "react";


const Header = (props) => {
    const {search,onInputChange, onSearchClick}=props;
    return ( <div className="jumbotron">
        <h1 classNam="display">
        <span className="material-icons brand">fastfood</span> FOOD RECIPE APP</h1>
<div className="input-group w-50  mx-auto">
  <input type="text" className="form-control" placeholder="Search your Recipe..." 
  value={props.search} 
  onChange={props.onInputChange}
   />
  <div className="input-group-append">
  <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
  </div>
</div>
    </div>       
)}

export default Header; 