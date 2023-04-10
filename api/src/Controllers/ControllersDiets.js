const axios = require("axios")
const { diets } = require("../db");
const { API_KEY } = process.env;

async function createDiets() {
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
      return await diets.bulkCreate(basicDiets);
    } else return;
  }
  
  async function getApiDiets() {
    const responseAPI = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`
    );
    let diet = responseAPI.data.results.map((recipe) => recipe.diet).flat(2).map(d => `${d[0].toUpperCase()}${d.substring(1)}`);
  
    return diet;
  }
  
  async function getDbDiets() {
    let dbQuery = await diets.findAll({
      attributes: ["name"],
    });
  
    let dieta = dbQuery.map((diet) => diet.dataValues.name);
  
    return dieta;
  }
  
  async function getDiets() {
    // const apiDiets = await getApiDiets();
    const apiDiets = [];
    const dbDiets = await getDbDiets();
  
    let diets = apiDiets.concat(dbDiets).flat(2);
  
    let setDiets = new Set(diets);
  
    return [...setDiets];
  }
module.exports = {
    getDiets,
    createDiets
}  