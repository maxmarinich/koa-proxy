const { interfaces } = require('./network');

const [host] = interfaces.en0;
const target = `http://${host}`;

module.exports = [
  {
    match: '/api-1',
    target: `${target}/post-api`,
    rewrite: (path) => path.replace('api-1', ''),
  },
  {
    match: '/api-2',
    target: `${target}/get-api`,
    rewrite: (path) => path.replace('api-2', ''),
  },
];
