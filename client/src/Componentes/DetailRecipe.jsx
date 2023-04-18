// | en esta vista se deberá mostrar toda la
// información específica de una receta:

import { useParams } from "react-router-dom";
// id
// name
// Image
// sumary
// healthScore
// analyzedInstructions:
// dietId

const DetailRecipe = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>ESTE es el Detail {id}</h1>
    </div>
  );
};

export default DetailRecipe;
