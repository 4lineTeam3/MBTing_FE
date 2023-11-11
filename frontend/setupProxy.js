// import { createProxyMiddleware } from 'http-proxy-middleware';

// export default function(app) {
//     app.use(
//         '/auth/',
//         createProxyMiddleware({
//             target: 'http://223.194.131.109:8000',
//             changeOrigin: true,
//         })
//     );
// };
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/auth/',
        createProxyMiddleware({
            target: 'http://192.168.0.51:8000',
            changeOrigin: true,
        })
    );
};