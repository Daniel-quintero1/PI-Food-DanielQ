const { Recipe } = require("../models/Recipe");
const { getAllRecipe, SearchRecipeByName} = require("../Controllers/ControllersGet");

const recipeName = async (req, res) => {
  const { title } = req.query;
  console.log(req.query);
  const result = title
    ? await SearchRecipeByName(title)
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
