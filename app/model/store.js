'use strict';

// 门店
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Store = app.model.define('store', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    owner_id: INTEGER,
    desc: STRING(100),
    addr: STRING(100), // 店铺地址
    imgs: STRING(100), // 店铺图片详情逗号隔开，数组
    created_at: DATE,
    updated_at: DATE
  });

  Store.associate = function() {
    app.model.Store.belongsTo(app.model.User, {
      as: 'owner',
      foreignKey: 'owner_id'
    });
  };

  return Store;
};
