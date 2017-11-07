module.exports = function (sequelize, DataTypes){

  const Condition = sequelize.define('Condition', {
    type: {type: DataTypes.STRING, allowNull: false}
  },
    {tableName: 'conditions', timestamps: false}
  );

  Condition.associate = function (models){
    Condition.hasMany(models.Item, {
      foreignKey: 'condition_id',
      as: 'Condition'
    })
  }

  return Condition;
}