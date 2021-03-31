module.exports = [
  {
    match: '/api-1',
    target: '/post-api',
    rewrite: (path) => path.replace('api-1', 'api/get'),
  },
  {
    match: '/api-2',
    target: '/get-api',
    rewrite: (path) => path.replace('api-2', 'api/rest'),
  },
];
