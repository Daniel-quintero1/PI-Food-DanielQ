
const {createDiets, getDiets} = require("../Controllers/ControllersDiets")

const newDiet = async (req, res) => {

    try {
      await createDiets();
      
      const response = await getDiets();
  
      res.json(response);
    } catch (error) {
      res.status(404).send(error.message);
    }
  };

module.exports = {
  newDiet,
};
