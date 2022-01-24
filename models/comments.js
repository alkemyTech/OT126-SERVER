const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Comments.belongsTo(models.Users)
      Comments.belongsTo(models.News)
    }
  }
  Comments.init(
    {
      user_id: {
        type: DataTypes.INTEGER
      },
      novelty_id: {
        type: DataTypes.INTEGER
      },
      body: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Comments',
      deletedAt: 'deletedAt',
      paranoid: true,
      timestamps: true
    }
  )
  return Comments
}
