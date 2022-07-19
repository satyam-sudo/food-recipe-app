import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./component/Header";
import Recipe from "./component/Recipe";
import Axios from "axios";


function App() {

  useEffect(() =>{
    getRecipe();
}, []);

  const getRecipe=async ()=>{
    const res=await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  setRecipe(res.data.hits);
  };
  const [search, setSearch]= useState("");
  const [recipe, setRecipe]=useState([]);


  const APP_ID="5fcd3cc0";
  const APP_KEY="7dff3c87d3dd45422c04c53a857344d2";

  const onInputChange = (e) => {
   setSearch(e.target.value);
  };
const onSearchClick= () =>{
getRecipe();
}
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange}
      onSearchClick={onSearchClick} />
      <div className="container">
      <Recipe recipe={recipe} />
      </div>
    </div>
  );
}

export default App;
