/* eslint-env node */
const path = require('path');

module.exports = {
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
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                },
            },
        ],
    },
    entry: './src/index.tsx',
    devServer: {
        https: false,
        static: {
            directory: path.resolve(__dirname, '../../../build/gen/npm/web-build'),
        },
        compress: true,
        port: 3001,
    },
    output: {
        clean: true,
        path: path.join(__dirname, '../../../build/gen/npm/web-build'),
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
    mode: 'development',
};
