//Action types. con las que dan las funcionalidad con mi Back
import { GET_ADDRECIPE, GET_DETAILRECIPE, GET_RECIPE } from "./store";
// const { API_KEY } = process.env;

export function GetRecipe( idRecipe) {

  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${idRecipe}/information`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
         
        }
      ); // este fetch ira al reducer.js
      const data = await response.json();
      dispatch({ type: GET_RECIPE, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
}
