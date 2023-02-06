/* eslint-env node */
const path = require('path');

module.exports = require()({
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    app: {
        files: {
            app: ['js/app.tsx'],
        },
    },
    devServer: {
        https: false,
    },
    output: {
        publicPath: (function () {
            const { NODE_ENV, PORT = 3001, WEBPACK_LOCALHOST } = process.env;

            if (NODE_ENV === 'production') {
                return '/';
            }

            // Use localhost when running on mac or when flag is set explicitly
            var isMac = process.platform === 'darwin';
            if (WEBPACK_LOCALHOST == 1 || (isMac && WEBPACK_LOCALHOST != 0)) {
                return `//localhost:${PORT}/`;
            }

            return `//localhost:${PORT}/`;
        })(),
        path: path.join(__dirname, '../../../build/gen/npm/web-build/partner'),
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'web/static', 'images'),
            css: path.resolve(__dirname, 'web/static', 'css'),
            interfaces: path.resolve(__dirname, 'web/static/js', 'interfaces'),
            utils: path.resolve(__dirname, 'web/static/js', 'utils'),
            resources: path.resolve(__dirname, 'web/static/', 'resources'),
        },
        extensions: ['.ts', '.tsx', '.js'],
    },
    typescript: {
        enabled: true,
    },
});
