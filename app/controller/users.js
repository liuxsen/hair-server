'use strict';
const { alreadyExists, invalidePwd, invalideAccount } = require('../code');
const { pwdHash, pwdCompare, jwtSign } = require('../utils/pwd');
// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.User.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  async login() {
    const { ctx } = this;
    try {
      ctx.validate({
        email: { type: 'string' },
        pwd: { type: 'string' }
      });
    } catch (error) {
      ctx.logger.warn(error.errors);
      ctx.body = {
        success: false,
        error: error.errors
      };
    }
    const { pwd, email } = ctx.request.body;
    const user = await ctx.model.User.findOne({
      where: {
        email,
        pwd
      }
    });
    if (user) {
      const token = jwtSign(user.id);
      console.log(user.id);
      ctx.cookies.set('token', token, {
        maxAge: 24 * 3600 * 1000,
        httpOnly: true, // by default it's true
        encrypt: true // 加密，并且可以设置为中文
      });
      ctx.body = {
        success: true
      };
    } else {
      ctx.body = {
        success: false,
        error: invalideAccount
      };
    }
  }

  async create() {
    const ctx = this.ctx;
    const createRule = {
      name: { type: 'string' },
      age: { type: 'number', required: false },
      is_admin: { type: 'number', required: false },
      phone: { type: 'string' },
      pwd: { type: 'string' }
    };
    try {
      ctx.validate(createRule);
    } catch (error) {
      ctx.logger.warn(error.errors);
      ctx.body = { success: false, error: error.errors };
      return;
    }

    const { name, age, is_admin, phone, email, pwd } = ctx.request.body;
    // 查询数据库是否已经存在用户
    const hasUser = await ctx.model.User.findOne({
      where: {
        phone
      }
    });
    if (hasUser) {
      ctx.body = {
        success: false,
        error: alreadyExists
      };
      return;
    }
    const user = await ctx.model.User.create({ name, age, is_admin, phone, email, pwd });
    delete user.dataValues.pwd;
    ctx.status = 201;
    ctx.body = {
      success: true,
      data: user
    };
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await user.update({ name, age });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;
