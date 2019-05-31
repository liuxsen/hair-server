'use strict';
// 获取用户信息
const { jwtVerify } = require('../utils/pwd');
module.exports = options => {
  return async function auth(ctx, next) {
    // 获取用户信息
    let token = ctx.cookies.get('token', {
      encrypt: true
    });
    if (token) {
      const tokenInfo = jwtVerify(token);
      const user = await ctx.model.User.findOne({
        where: {
          id: tokenInfo.id
        }
      });
      if (user) {
        ctx.user = user;
      }
    }
    await next();
  };
};
