const Koa = require('koa');

const routes = require('./routes');
const { interfaces } = require('./network');
const { configureCors, configureProxy, configureStatic } = require('./middlewares');

const port = process.env.PORT || 80;
const app = new Koa({ proxy: true });

configureCors(app);
configureProxy(app);
configureStatic(app);

app.use(routes());

app.listen(port, () => {
  console.group('Proxy server listening at: ');
  console.info(`Local ==> 🌎: http://localhost:${port}`);
  console.info(`Network ==> 🌎: http://${interfaces.en0}:${port}`);
  console.groupEnd();
});
