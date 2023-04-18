import { useEffect } from "react";
import RecipeCards from "./RecipeCards";
//aca es donde debemos reecplazar por el URL de los Recipe
import { useDispatch, useSelector } from "react-redux";
import { GetRecipe } from "../Redux/Actions";

//Funcionales ACA usaremos useSelector, useDispatch
//class ACA usaremos => mapStateToProps , mapDispacthToProps
const Home = (recetas) => {
  // Aqui comienza lo de paginado con hook
  const selecRecipe = useSelector((state) => state.recipes);

  const dispatch = useDispatch();
  //Luego buscaremos nuestra card con el UseEffect
  useEffect(() => {
    //quiero pedir las  recetas de ACTIONS.js para que sean guardado en el estado global
    dispatch(GetRecipe());
  }, [dispatch]);

  // aqui finaliza lo de paginado y se agrega al div
  return (
    <div>
      <h1>Welcome to Home</h1>
      <hr />
      <RecipeCards recetas={selecRecipe} />
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
