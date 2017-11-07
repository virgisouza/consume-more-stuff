module.exports = function (sequelize, DataTypes){

  const Condition = sequelize.define('Condition', {
    new: {type: DataTypes.STRING, allowNull: false},
    like_new: {type: DataTypes.STRING, allowNull: false},
    used: {type: DataTypes.STRING, allowNull: false}
  },
    {tableName: 'conditions'}
  );

  Condition.associate = function (models){
    Condition.hasMany(models.Item, {
      foreignKey: 'condition_id',
      as: 'Condition'
    })
  }

  return Condition;
}