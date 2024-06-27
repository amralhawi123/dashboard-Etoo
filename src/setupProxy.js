const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v3', // Ensure this matches the beginning of the endpoint you are using
    createProxyMiddleware({
      target: 'https://api.etoolabs.com',
      changeOrigin: true,
    })
  );
};