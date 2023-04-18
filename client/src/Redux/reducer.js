import { GET_RECIPE } from "./store";

const initialState = {
  recipes: [],
  filterRecipe: [],
  detailRecipe: [],
  diet: [],
};

//de lo que yo declare en Actions lo colocamos como Case
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
