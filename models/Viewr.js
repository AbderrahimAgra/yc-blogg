'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viewer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Viewer.belongsTo(models.Category);
    }
  }
  Viewer.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Viewer',
    }
  );
  return Viewer;
};
