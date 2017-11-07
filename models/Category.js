module.exports = function (sequelize, DataTypes){

  const Category = sequelize.define('Category', {
    electronics: {type: DataTypes.STRING, allowNull: false},
    clothes: {type: DataTypes.STRING, allowNull: false},
    auto: {type: DataTypes.STRING, allowNull: false},
    furniture: {type: DataTypes.STRING, allowNull: false},
    misc: {type: DataTypes.STRING, allowNull: false}
  },
    {tableName: 'categories'},
  );

  Category.associate = function (models) {
    Category.hasMany(models.Item, {
      foreignKey: 'category_id',
      as: 'Category'
    });
  }

  return Category;
}