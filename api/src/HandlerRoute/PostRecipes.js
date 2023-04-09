const {recipe} = require("../db")
const { v4: uuidv4 } = require("uuid");

const recipeId = async (req, res) => {
  const {
    nombre,
    imagen,
    resumen_del_plato,
    nivel_de_comida_saludable,
    paso_a_paso,
    dietId
  } = req.body;
  if (
    ![
      nombre
    ].every(Boolean)
    )
    return res.status(404).send("El campo 'nombre' es obligatorio");
    const id = uuidv4();
    try {
    const newRecipe = await recipe.create({
       id,
      nombre,
      imagen,
      resumen_del_plato,
      nivel_de_comida_saludable,
      paso_a_paso,
    });
   const recipeNew =  await newRecipe.setUser(dietId)
    console.log(recipeNew);

    res.status(200).json(recipeNew);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  recipeId,
};
