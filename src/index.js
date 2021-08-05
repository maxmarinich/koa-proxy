const fs = require('fs');
const https = require('https');
const Koa = require('koa');

const routes = require('./routes');
const { interfaces } = require('./network');
const { configureCors, configureProxy, configureStatic } = require('./middlewares');

const ssl = process.argv.some((i) => i === '--https');
const protocol = ssl ? 'https' : 'http';
const port = process.env.PORT || 80;
const app = new Koa({ proxy: true });

configureCors(app);
configureProxy(app);
configureStatic(app);

app.use(routes());

if (ssl) {
  // openssl req -nodes -new -x509 -keyout server.key -out server.cert
  const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert: fs.readFileSync(__dirname + '/server.cert'),
  };

  const appSSL = https.createServer(options, app.callback());
  appSSL.listen(port, listener);
} else {
  app.listen(port, listener);
}

function listener() {
  console.group('Proxy server listening at: ');
  console.info(`Local ==> 🌎: ${protocol}://localhost:${port}`);
  console.info(`Network ==> 🌎: ${protocol}://${interfaces.en0}:${port}
  `);
  console.groupEnd();
}
