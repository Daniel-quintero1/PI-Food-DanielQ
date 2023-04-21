// import { useEffect } from "react";
import RecipeCards from "./RecipeCards";
//aca es donde debemos reecplazar por el URL de los Recipe
// import { useDispatch, useSelector } from "react-redux";
// import { AddRecipe } from "../Redux/Actions";
import React from 'react';

//Funcionales ACA usaremos useSelector, useDispatch
//class ACA usaremos => mapStateToProps , mapDispacthToProps
const Home = () => {
  // Aqui comienza lo de paginado con hook

  // const selecRecipe = useSelector((state) => state.recipes);
  // const dispatch = useDispatch();

  //Luego buscaremos nuestra card con el UseEffect
  //quiero pedir las  recetas de ACTIONS.js para que sean guardado en el estado global
  
  // useEffect(() => {
  //  dispatch(AddRecipe());
  // }, [dispatch]);

  // aqui finaliza lo de paginado y se agrega al div
  return (
    <div>
      <h1>Welcome to my home page!</h1>
      <RecipeCards />
    </div>
  );
};

// este metodo es con connect
// const mapStateToProps = (state) => {
//   return {
//     recipes: state.recipes,

//   }
// }
// export default connect(mapStateToProps, null)(Home)
export default Home;
