const { recipe } = require("../models/Recipe");

const recipeId = (req, res) => {
  const {
    id,
    nombre,
    imagen,
    resumen_del_plato,
    nivel_de_comida_saludable,
    paso_a_paso,
  } = req.body;
};

module.exports = {
  recipeId,
};
