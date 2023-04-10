  const {  DataTypes } = require("sequelize");
  // Exportamos una funcion que define el modelo
  // Luego le injectamos la conexion a sequelize.
  module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
      "recipe",
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4, //cuando cree un usuario los UUID, se crean automaticamente
          allowNull:false
        },
        name: { //tittle
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          
        },
        sumary: { //sumary
          type: DataTypes.STRING,
          validate: {
            len: [0, 100]
          }
        },
        healthScore : { //healthScore
          type: DataTypes.STRING,
          validate: {
            max: 100,
            min: 0,
          },
        },
        analyzedInstructions: { //analyzedInstructions
          type: DataTypes.TEXT,
        },
        dietId: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
      },
      { timestamps: false }
    );
  };
