const { Router } = require("express");
const { Id_recipe } = require("../Controllers/GetRecipesId");
const { recipeName } = require("../Controllers/GetRecipesName");
const { recipeId } = require("../Controllers/PostRecipes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/recipes", recipeId);
router.get("/recipes/name?=", recipeName);
router.get("/recipes/:idRecipe", Id_recipe);

module.exports = router;
