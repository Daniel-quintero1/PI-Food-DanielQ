import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DETAILRECIPE = "GET_DETAILRECIPE";
export const GET_ADDRECIPE = "GET_DETAILRECIPE";

//Store=>se utiliza para crear y configurar el
// store de Redux.
/*
// El store de Redux es un objeto que contiene todo el 
estado de la aplicación y proporciona 
una interfaz para acceder a él y 
actualizarlo. El store también es 
responsable de recibir las acciones que
 se envían a través de la aplicación
 y de actualizar el estado en consecuencia.
*/

//ACA recibimos todo los TYPE que declaremos en
//en el REDUCE/ACTION-
const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
