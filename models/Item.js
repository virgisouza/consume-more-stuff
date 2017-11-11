module.exports = function (sequelize, DataTypes){

  const Item = sequelize.define('Item', {
    name: {type: DataTypes.STRING, allowNull: false},
    file: {type: DataTypes.STRING, allowNull: false},
    body: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
  },
    {tableName: 'items'}
  );

  Item.associate = function (models) {
    Item.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'Category'});
    Item.belongsTo(models.Condition, {
      foreignKey: 'condition_id',
      as: 'Condition'});
    Item.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'User'});
    Item.belongsTo(models.Status, {
      foreignKey: 'status_id',
      as: 'Status'});
  }

  return Item;
}