const { Op } = require("sequelize");
const { Recipe } = require("../db");
const { Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const cleanArray = (arr) =>
  arr.map((x) => {
    return {
      id: x.id,
      name: x.title,
      image: x.image,
      summary: x.summary,
      steps: x.analyzedInstructions[0]?.steps.map((s) => {
        return {
          number: s.number,
          step: s.step,
        };
      }),
      diets: x.diets,
      created: false,
    };
  });

const getRecipeById = async (idRecipe, source) => {
  const receta =
    source === "api"
    ? (
          await axios.get(
            `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`
          )
        ).data // el axios me viene en data por eso
      : await Recipe.findByPk(idRecipe);
  return receta;
};

const getAllRecipe = async () => {
  //buscar en bdd
  const getBddRecipe = await Recipe.findAll();
  
  //buscar en api
  const getApiRecipe = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=5&apiKey=${API_KEY}`
    )
    ).data.results;
  const apiRecipe = cleanArray(getApiRecipe);
  //unifica amabas
  return [...getBddRecipe, ...apiRecipe];
};
//debo Preguntar que solo me traiga 1 sola cosa cuando le pido de bdd o api
const SearchRecipeByName = async (name) => {
  const BddRecipe = await Recipe.findAll({
    where: {
      title: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [
      {
        model: Diets,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  const apiRecipeRaw = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&query=${name}&number=5&apiKey=${API_KEY}`
    )
  ).data;
  const apiRecipe = cleanArray(apiRecipeRaw);
  const apiFilter = apiRecipe.filter((r) =>
    r.name.toLowerCase().includes(name.toString().toLowerCase())
  );
  apiFilter.length ?
            res.status(200).send(apiFilter)
            :
            res.status(404).send("Recipe not found")

  return [...BddRecipe, ...apiFilter];
};


module.exports = {
  getRecipeById,
  getAllRecipe,
  SearchRecipeByName,
};
