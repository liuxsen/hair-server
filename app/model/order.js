'use strict';

// 会员订单
module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const Order = app.model.define('order', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    store_id: INTEGER, // 关联的门店id
    member_id: INTEGER, // 会员id
    pay_amount: INTEGER, // 支付金额
    discount_amount: INTEGER, // 优惠金额
    discount_id: INTEGER, // 参与优惠id
    created_at: DATE,
    updated_at: DATE
  });

  Order.associate = function() {
    app.model.Order.belongsTo(app.model.Store, {
      as: 'store',
      foreignKey: 'store_id'
    });
    app.model.Order.belongsTo(app.model.Member, {
      as: 'member',
      foreignKey: 'member_id'
    });
    app.model.Order.belongsTo(app.model.Discount, {
      as: 'discount',
      foreignKey: 'discount_id'
    });
  };

  return Order;
};
