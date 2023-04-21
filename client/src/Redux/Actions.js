//Action types. con las que dan las funcionalidad con mi Back
import { GET_ADDRECIPE, GET_DETAILRECIPE, GET_DIET, GET_RECIPE } from "./store";
import axios from "axios"

export function AddRecipe(recipe) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/recipes/${recipe}`,{ // ojo borrar recipe
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe)
      }
      ); // este fetch ira al reducer.js
      const data = await response.json();
      dispatch({ type: GET_ADDRECIPE, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function AllRecipe() {
  return async(dispatch) => {
    try {
      const response = await axios.get(`/recipes`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
      const data = await response.json()
      dispatch({type: GET_RECIPE, payload: data})
    } catch (error) {
      console.error(error)
    }
  }
}

export function DetailRecipe(idRecipe){
  return async(dispatch) => {
    const response = await axios.get(`/recipes/${idRecipe}`, {
      method: "GET",
      headers:{ "Content-Type": "application/json" }
    })
    const data = await response.json()
    dispatch({ type: GET_DETAILRECIPE, payload: data})
  }
}

export function Diet() {
  return async(dispatch) => {
    const response = await axios.get(`/diets`,{
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    const data = await response.json()
    dispatch({type: GET_DIET, payload: data})
  }
}
