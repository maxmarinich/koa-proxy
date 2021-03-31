const Router = require('@koa/router');

const router = new Router();

router
  .get('/get-api', async (ctx) => {
    ctx.body = await Promise.resolve({ message: 'Get api response.' });
  })
  .post('/post-api', async (ctx) => {
    ctx.body = await Promise.resolve({ message: 'Post api response.' });
  });

module.exports = function routes() {
  return router.routes();
};
