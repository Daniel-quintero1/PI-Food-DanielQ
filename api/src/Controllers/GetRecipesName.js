const { recipe } = require("../models/Recipe");

const recipeName = (req, res) => {
  const { name } = req.query;
};

module.exports = {
  recipeName,
};
