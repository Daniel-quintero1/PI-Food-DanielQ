const { Router } = require("express");
const { Id_recipe } = require("../HandlerRoute/GetRecipesId");
const { recipeName } = require("../HandlerRoute/GetRecipesName");
const { recipeId } = require("../HandlerRoute/PostRecipes");
const { newDiet } = require("../HandlerRoute/GetDiets");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/recipes", recipeId);//ok y falta algo
router.get("/recipes", recipeName);
router.get("/recipes/:idRecipe", Id_recipe); // esta ok 
router.get("/diets", newDiet)

module.exports = router;
