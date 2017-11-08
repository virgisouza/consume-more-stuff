module.exports = function (sequelize, DataTypes){

  const Category = sequelize.define('Category', {
    name: {type: DataTypes.STRING, allowNull: false}
  },
    {tableName: 'categories', timestamps: false}
  );

  Category.associate = function (models) {
    Category.hasMany(models.Item, {
      foreignKey: 'category_id',
      as: 'Category'
    });
  }

  return Category;
}