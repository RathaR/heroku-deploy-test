var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'heroku-deploy-test'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/heroku-deploy-test-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'heroku-deploy-test'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/heroku-deploy-test-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'heroku-deploy-test'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/heroku-deploy-test-production'
  }
};

module.exports = config[env];
