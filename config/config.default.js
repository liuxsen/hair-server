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

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558173373648_2345';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
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
