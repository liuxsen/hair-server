'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const { auth } = middleware;
  router.get('/', controller.home.index);
  router.post('/users/login', controller.users.login);
  router.resources('users', '/users', controller.users);
  router.resources('stores', '/stores', auth, controller.stores);
  router.resources('members', '/members', auth, controller.members);
  router.resources('orders', '/orders', auth, controller.orders);
  router.resources('discounts', '/discounts', auth, controller.discounts);
};
