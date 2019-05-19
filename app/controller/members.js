'use strict';

// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class MemberController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
      include: [
        {
          model: this.app.model.Store,
          as: 'store',
          attributes: {
            exclude: ['created_at', 'updated_at']
          }
        }
      ]
    };
    ctx.body = await ctx.model.Member.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Member.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, phone, sex, age, store_id } = ctx.request.body;
    const user = await ctx.model.Member.create({ name, phone, sex, age, store_id });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const member = await ctx.model.Member.findByPk(id);
    if (!member) {
      ctx.status = 404;
      return;
    }

    const { name, phone, sex, age } = ctx.request.body;
    await member.update({ name, phone, sex, age });
    ctx.body = member;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const member = await ctx.model.Member.findByPk(id);
    if (!member) {
      ctx.status = 404;
      return;
    }

    await member.destroy();
    ctx.status = 200;
  }
}

module.exports = MemberController;
