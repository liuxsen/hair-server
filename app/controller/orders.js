'use strict';

// 订单
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class OrderController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    };
    ctx.body = await ctx.model.Order.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Order.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { store_id, member_id, pay_amount, discount_amount, discount_id } = ctx.request.body;
    const store = await ctx.model.Order.create({ store_id, member_id, pay_amount, discount_amount, discount_id });
    ctx.status = 201;
    ctx.body = store;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const order = await ctx.model.Order.findByPk(id);
    if (!order) {
      ctx.status = 404;
      return;
    }

    const { store_id, member_id, pay_amount, discount_amount, discount_id } = ctx.request.body;
    await order.update({ store_id, member_id, pay_amount, discount_amount, discount_id });
    ctx.body = order;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const order = await ctx.model.Order.findByPk(id);
    if (!order) {
      ctx.status = 404;
      return;
    }

    await order.destroy();
    ctx.status = 200;
  }
}

module.exports = OrderController;
