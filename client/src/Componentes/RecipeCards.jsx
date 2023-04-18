import AddCard from "./AddRecipeCard";

const RecipeCards = (receta) => { 
  return (
  <div>
    {receta.recetas.map((x) => { //recetas esta en Home.jsx
      return (
        < AddCard
          key={x.id}
          id={x.id}
          name={x.name}
          image={x.image}
          sumary={x.sumary}
          dietId={x.dietId}
        />
      );
    })}
  </div>
  )
};

export default RecipeCards;
