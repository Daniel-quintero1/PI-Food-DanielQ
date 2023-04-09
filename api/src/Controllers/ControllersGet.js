const { Op } = require("sequelize");
const { recipe } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const cleanArray = (arr) =>
  arr.map((x) => {
    return {
      id: x.id,
      name: x.title,
      image: x.image,
      // summary: x.summary,
      // steps: x.analyzedInstructions[0]?.steps.map((s) => {
      //   return {
      //     number: s.number,
      //     step: s.step,
      //   };
      // }),
      // diets: x.diets,
      // created: false,
    };
  });

const getRecipeById = async (idRecipe, source) => {
  const receta =
    source === "api"
      ? (
          await axios.get(
            `https://api.spoonacular.com/recipes/${idRecipe}/information?includeNutrition=true&apiKey=${API_KEY}`
          )
        ).data // el axios me viene en data por eso
      : await recipe.findByPk(idRecipe, {
          include: { //esto es para ver en el detalle de la id que busq mas informacion del id. 
            model: recipe, // abro un obj de configuracion, inclu, el modelo recipe
            attributes: ["nombre", "image"],
          },
        });
  return receta;
};

const getAllRecipe = async () => {
  //buscar en bdd
  const getBddRecipe = await recipe.findAll();

  //buscar en api
  const getApiRecipe = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=5`
    )
  ).data.results;
  const apiRecipe = cleanArray(getApiRecipe);
  //unifica amabas
  return [...getBddRecipe, ...apiRecipe];
};
//debo Preguntar que solo me traiga 1 sola cosa cuando le pido de bdd o api
const SearchRecipeByName = async (name) => {
  const BddRecipe = await recipe.findAll({
    where: !!name
      ? {
          name: { [Op.eq]: name.toLowerCase() },
        }
      : {},
  });
  const apiRecipeRaw = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&query=${name}&apiKey=${API_KEY}&number=5`
    )
  ).data;
  const apiRecipe = cleanArray(apiRecipeRaw);
  const apiFilter = apiRecipe.filter((r) =>
    r.name.toLowerCase().includes(name.toString().toLowerCase())
  );
  return [...BddRecipe, ...apiFilter];
};

module.exports = {
  getRecipeById,
  getAllRecipe,
  SearchRecipeByName,
};
