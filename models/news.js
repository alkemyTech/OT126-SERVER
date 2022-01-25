<<<<<<< HEAD
const {
  Model
} = require('sequelize')
=======
const { Model } = require('sequelize')
>>>>>>> 90f77bf67b912255d2b99bc1e9a67b4ed2725e94

module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      News.belongsTo(models.Categories, { as: 'category' })
    }
  }

  News.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'News',
    deletedAt: 'deletedAt',
    paranoid: true,
    timestamps: true
  })
  return News
}
