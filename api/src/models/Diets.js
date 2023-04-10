const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "diets",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
          // "Gluten Free",
          // "Ketogenic",
          // "Vegetarian",
          // "Lacto-Vegetarian",
          // "Ovo-Vegetarian",
          // "Vegan",
          // "Pescetarian",
          // "Paleo",
          // "Primal",
          // "Low FODMAP",
          // "Whole30"
        
        allowNull: false,
        validate: {
          isLowercase: true,
          isUppercase: true,
        }
      },
    },
    { timestamps: false }
  );
};
