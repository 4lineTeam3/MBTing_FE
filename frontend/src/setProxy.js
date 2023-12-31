const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/auth/',
        createProxyMiddleware({
            target: 'http://223.194.131.109:8000',
            changeOrigin: true,
        })
    );

    app.use(
        '/update_profile/',
        createProxyMiddleware({
            target: 'http://223.194.131.109:8000',
            changeOrigin: true,
        })
    );
};