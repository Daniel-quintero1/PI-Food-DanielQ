// Sector en el que se vea un listado de cards con las recetas. Al iniciar
//deberá cargar los primeros resultados obtenidos desde la ruta GET /recipes y deberá mostrar su:
// Imagen.
// Nombre.
// Tipos de dietas.
// Cuando se le hace click a una Card deberá redirigir al detalle de esa receta específica.
import { Link } from "react-router-dom";
const AddCard = (recipe) => {
  return (
    <div>
      <hr />
      <Link to={`/detail/${recipe.id}`}>
        <h4>{recipe.name}</h4>
      </Link>
      <p>{recipe.image}</p>
      <p>{recipe.sumary}</p>
      <p>{recipe.dietId}</p>
      <hr />
    </div>
  );
};

export default AddCard;
