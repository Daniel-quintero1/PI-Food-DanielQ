const { recipe } = require("../models/Recipe");

const Id_recipe = (req, res) => {
  const {
    id,
    nombre,
    imagen,
    resumen_del_plato,
    nivel_de_comida_saludable,
    paso_a_paso,
  } = req.params;
  
};

module.exports = {
  Id_recipe,
};
