'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('users', '/users', controller.users);
  router.resources('stores', '/stores', controller.stores);
  router.resources('members', '/members', controller.members);
  router.resources('orders', '/orders', controller.orders);
  router.resources('discounts', '/discounts', controller.discounts);
};
