module.exports = function (sequelize, DataTypes){

  const Item = sequelize.define('Item', {
    name: {type: DataTypes.STRING, allowNull: false},
    file: {type: DataTypes.STRING, allowNull: false},
    body: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
    category: {type: DataTypes.STRING, allowNull: false},
    condition: {type: DataTypes.STRING, allowNull: false}
  },
    {tableName: 'items'}
  );

  Item.associate = function (models) {
    Item.belongsTo(models.User, {
      foreignKey: 'posted_by'
    });
  }

  return Item;
}