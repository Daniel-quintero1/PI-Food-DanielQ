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
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.INTEGER,
          
        },
        resumen_del_plato: {
          type: DataTypes.STRING,
          validate: {
            len: [0, 100]
          }
        },
        nivel_de_comida_saludable: {
          type: DataTypes.STRING,
      
        },
        paso_a_paso: {
          type: DataTypes.STRING,
        
        },
      },
      { timestamps: false }
    );
  };
