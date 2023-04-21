import { GET_ADDRECIPE, GET_DETAILRECIPE, GET_DIET, GET_RECIPE } from "./store";

const initialState = {
  recipes: [
      {
        id: "a7939e26-7586-4e82-9a26-3e745162814d",
        name: "Empanada",
        image: "imag",
        sumary: "uno",
        healthScore: "alto",
        analyzedInstructions: "varios pasoss",
        dietId: true
      },
      {
        id: "421b8c99-e27b-4b2e-803b-7692019d89fc",
        name: "Pasta",
        image: "imag",
        sumary: "uno",
        healthScore: "alto",
        analyzedInstructions: "varios pasoss",
        dietId: true
      },
      {
        id: "421b8c99-e27b-4b2e-803b-7692019d",
        name: "Pizza",
        image: "imag",
        sumary: "uno",
        healthScore: "alto",
        analyzedInstructions: "varios pasoss",
        dietId: true
      },
    ],
  AllRecipe: [],
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
      case GET_ADDRECIPE:
        return{
          ...state,
          AllRecipe: action.payload
        }
        case GET_DETAILRECIPE:
          return {
            ...state,
            detailRecipe: action.payload
          }
          case GET_DIET:
            return{
              ...state,
              diet: action.payload
            }
    default:
      return { ...state };
  }
};

export default rootReducer;
