const { Recipe } = require("../db");
const { v4: uuidv4 } = require("uuid");

// const createPost = async (
//   nombre,
//   image,
//   resumen_del_plato,
//   nivel_de_comida_saludable,
//   paso_a_paso,
//   dietId
// ) => {
  const id = uuidv4();
//   const newPost = await recipe.create({
//     id,
//     nombre,
//     image,
//     resumen_del_plato,
//     nivel_de_comida_saludable,
//     paso_a_paso,
//   });
//  await newPost.setUser(dietId)
// return newPost;
// };

// module.exports = {
//   createPost,
// };
const createRecipe = async (obj) => {
  let newrecipe = await Recipe.create({
    id,
    name: obj.title,
    image: obj.image,
    sumary: obj.sumary,
    healthScore: obj.healthScore,
    analyzedInstructions: obj.analyzedInstructions,
  });
  await newrecipe.addDiet(dietId);
  return newrecipe;
};

module.exports = {
  createRecipe,
};
