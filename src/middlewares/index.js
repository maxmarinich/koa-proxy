const path = require('path');
const cors = require('@koa/cors');
const proxy = require('koa-proxies');
const serve = require('koa-static');

const proxyScheme = require('../scheme');
const defaultOptions = require('../options');

const configureStatic = (app) => {
  const pathname = path.resolve(__dirname + '../../../test');
  app.use(serve(pathname));
};

const configureCors = (app) => {
  app.use(cors({ credentials: true }));
};

const configureProxy = (app) => {
  proxyScheme.forEach((context) => {
    const { match, ...options } = context;
    const proxyOptions = { ...defaultOptions, ...options };

    app.use(proxy(match, proxyOptions));
  });
};

module.exports = {
  configureCors,
  configureProxy,
  configureStatic,
};
