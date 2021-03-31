const TOKENS = ['Secure', 'SameSite'];
const SET_COOKIE_HEADER = 'set-cookie';

const excludeTokens = (token) => {
  return !TOKENS.some((v) => token.includes(v));
};

const proxyRes = (response) => {
  const { [SET_COOKIE_HEADER]: cookies } = response.headers;

  if (cookies && cookies.length) {
    response.headers[SET_COOKIE_HEADER] = cookies.map((value) => {
      return value.split('; ').filter(excludeTokens).join('; ');
    });
  }
  return response;
};

module.exports = {
  preserveHeaderKeyCase: true,
  hostRewrite: true,
  protocolRewrite: true,
  cookieDomainRewrite: '*',
  changeOrigin: true,
  secure: true,
  logs: false,
  events: {
    proxyRes,
  },
};
