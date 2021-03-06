/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  config.security = {
    csrf: {
      enable: false
    }
  };

  config.cluster = {
    listen: {
      port: 7001,
      hostname: '0.0.0.0'
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558173373648_2345';

  // add your middleware config here
  config.middleware = ['auth'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '101.200.48.138',
    port: 3306,
    database: 'db',
    username: 'root',
    password: 'root'
  };

  return {
    ...config,
    ...userConfig
  };
};
