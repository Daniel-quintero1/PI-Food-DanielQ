const {recipe} = require("../db")
const { diets }= require("../db")

const { v4: uuidv4 } = require("uuid");

const recipeId = async (req, res) => {
  try {
  const {
    name,
    image,
    sumary,
    healthScore,
    analyzedInstructions,
    dietId
  } = req.body;

    if (!name) throw Error("Faltan datos importantes");
    const id = uuidv4();
    const newRecipe = await recipe.create({
       id,
       name,
       image,
       sumary,
       healthScore,
       analyzedInstructions,
    });
   const dietBdd = await diets.findAll({
    where: { name : dietId}
   })
   
    await newRecipe.setDiets(dietBdd)// preguntar al chatgpt
    console.log(newRecipe);
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  recipeId,
};
