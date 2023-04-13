const axios = require("axios")
const { Diets } = require("../db");
const { API_KEY } = process.env;

const getDbDiets = async () => {
  let dbQuery = await Diets.findAll({
    attributes: ["name"],
  });

  let dieta = dbQuery.map((diet) => diet.dataValues.name);

  return dieta;
}
const createDiets= async () => {
    let dbDiets = await getDbDiets();
  
    if (dbDiets.length === 0) {
      let basicDiets = [
        { name: "Gluten free" },
        { name: "Ketogenic" },
        { name: "Vegan" },
        { name: "Vegetarian" },
        { name: "Lacto-Vegetarian" },
        { name: "Ovo-Vegetarian" },
        { name: "Pescetarian" },
        { name: "Paleolithic" },
        { name: "Primal" },
        { name: "Low FODMAP" },
        { name: "Whole 30" },
      ];
      return await Diets.bulkCreate(basicDiets);// aca creamos la lista de diets, que si aun 
      //no existe en la bdd las agregamos con el model.bullCreate(arrayObj)
    } return;
  }
  
  async function getApiDiets() {
    const responseAPI = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`
    );
    let diet = responseAPI.data.results
    .map((recipe) => recipe.diet?.map(d => `${d[0].toUpperCase()}${d.substring(1)}`))
    .flat(2)
    .filter(Boolean);
    return diet;
  }
  
  
  async function getDiets() {
    const apiDiets = await getApiDiets();
    // const apiDiets = [];
    const dbDiets = await getDbDiets();
  
    let diets = apiDiets.concat(dbDiets).flat(2);
  
    let setDiets = new Set(diets);
  
    return [...setDiets];
  }
module.exports = {
    getDiets,
    createDiets
}  