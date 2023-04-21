  import AddCard from "./AddRecipeCard";
  import style from "./RecipeCards.module.css";
  import { useSelector } from "react-redux";

  const RecipeCards = () => {
    //este componente debe tomar un array de usuario de array
    //mapeamos y por cada usuario renderiza una card
  
    const recipe = useSelector((state) => state.recipes);
    const filter = useSelector((state) => state.AllRecipe);
    console.log(recipe);
    console.log(filter);
    return (
      <div className={style.container}>
        {recipe.map((x) => {
          //recipe se mostrara  en Home.jsx
          return (
            <AddCard
              key={x.id}
              id={x.id}
              name={x.name}
              image={x.image}
              sumary={x.sumary}
              healthScore={x.healthScore}
              analyzedInstructions={x.analyzedInstructions}
              dietId={x.dietId}
            />
          );
        })}
      </div>
    );
  };

  export default RecipeCards;
