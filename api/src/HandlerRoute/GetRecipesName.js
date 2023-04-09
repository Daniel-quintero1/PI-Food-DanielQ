const { recipe } = require("../models/Recipe");
const { getAllRecipe, SearchRecipeByName } = require("../Controllers/ControllersGet");

const recipeName = async (req, res) => {
  const { nombre } = req.query;
  console.log(req.query);
  const result = nombre
    ? await SearchRecipeByName(nombre)
    : await getAllRecipe();
  try {
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  recipeName,
};
