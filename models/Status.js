module.exports = function (sequelize, DataTypes){

  const Status = sequelize.define('Status', {
    type: {type: DataTypes.STRING, allowNull: false}
  },
    {tableName: 'statuses', timestamps: false}
  );

  Status.associate = function (models) {
    Status.hasMany(models.Item, {
      foreignKey: 'status_id',
      as: 'Status'
    })
  }

  return Status;
}