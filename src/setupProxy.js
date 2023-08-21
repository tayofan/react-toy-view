const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app){
    app.use(
        createProxyMiddleware('/seoguAPI/3660000/getPbctltInfo',{
            target: `https://www.seogu.go.kr`,
            changeOrigin: true
        }),
    );
}