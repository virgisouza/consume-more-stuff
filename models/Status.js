module.exports = function (sequelize, DataTypes){

  const Status = sequelize.define('Status', {
    published: {type: DataTypes.STRING, allowNull: false},
    sold: {type: DataTypes.STRING, allowNull: false}
  },
    {tableName: 'statuses'}
  );

  Status.associate = function (models) {
    Status.hasMany(models.Item, {
      foreignKey: 'status_id',
      as: 'Status'
    })
  }

  return Status;
}