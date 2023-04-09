const { default: axios } = require("axios");
const {diets} = require("../db")

const newDiet = async (req, res) => {
const {nombre } = req.query;

try {
const responde = await axios(``)
const diet = await diets.findAll()
const tiposDeDietas = diet.map((dieta) => dieta.nombre);
    res.send(200).json(tiposDeDietas)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}
module.exports = {
    newDiet
}