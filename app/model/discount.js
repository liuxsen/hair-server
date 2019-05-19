'use strict';

// 会员订单
module.exports = app => {
  const { INTEGER, DATE, TINYINT } = app.Sequelize;

  const Discount = app.model.define('discount', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    store_id: INTEGER, // 关联的门店id
    discount_type: TINYINT, // 0 全部 1 满减 2 满折 3 限时折扣
    full_price: INTEGER, // 满多少钱
    subtract: INTEGER, // 减去的钱
    discount: TINYINT, // 折扣值
    limit_time: DATE, // 限时
    created_at: DATE,
    updated_at: DATE
  });

  Discount.associate = function() {
    app.model.Discount.belongsTo(app.model.Store, {
      as: 'store',
      foreignKey: 'store_id'
    });
  };
  return Discount;
};
