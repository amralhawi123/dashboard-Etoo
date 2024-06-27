const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v3', // Match the API path
    createProxyMiddleware({
      target: 'https://api.etoolabs.com',
      changeOrigin: true,
      secure: false, // Ignore invalid SSL certificates
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ldG9vbGFicy5jb20vdjMvcHVibGljL2NwYW5lbC9sb2dpbiIsImlhdCI6MTcxOTM0ODgzMSwiZXhwIjoxNzE5MzUyNDMxLCJuYmYiOjE3MTkzNDg4MzEsImp0aSI6IlBhOVNHWHV6bkVpaHB1ZksiLCJzdWIiOiIxNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.uChdnfPH87lqgYs7w35sms_qzSykgG3aAaR7JtF0z_E`);
      },
      pathRewrite: {
        '^/v3': '', // Remove base path
      },
    })
  );
};