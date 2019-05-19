'use strict';

// 门店
// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class StoreController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
      include: [
        {
          model: this.app.model.User,
          as: 'owner',
          attributes: ['name', 'id']
        }
      ]
    };
    ctx.body = await ctx.model.Store.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Store.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, owner_id, desc, addr, imgs } = ctx.request.body;
    const store = await ctx.model.Store.create({ name, owner_id, desc, addr, imgs });
    ctx.status = 201;
    ctx.body = store;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const store = await ctx.model.Store.findByPk(id);
    if (!store) {
      ctx.status = 404;
      return;
    }

    const { name, desc, addr, imgs } = ctx.request.body;
    await store.update({ name, desc, addr, imgs });
    ctx.body = store;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const store = await ctx.model.Store.findByPk(id);
    if (!store) {
      ctx.status = 404;
      return;
    }

    await store.destroy();
    ctx.status = 200;
  }
}

module.exports = StoreController;
