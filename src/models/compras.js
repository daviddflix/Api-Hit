const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('compras', {
    image: {type: DataTypes.STRING},
    comments: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    salsas: {type: DataTypes.JSON},
    pastas: {type: DataTypes.JSON},
    toppings: {type: DataTypes.JSON},
  }, {timestamps: false })
};