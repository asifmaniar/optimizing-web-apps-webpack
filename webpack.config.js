const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const babelConfig = require('./configs/babel');

module.exports = function (env) {

    const isDevelopment = env === 'development';
    console.log(`This is a ${isDevelopment ? "development" : "production"} build`);

    const baseConfig = {
        entry: './app/app.js',
        output: {
            path: path.resolve(__dirname, 'app/dist'),
            filename: 'app.bundle.js',
            publicPath: '/dist/',
        },
        plugins: [
            new webpack.DefinePlugin({
                ENV_IS_DEVELOPMENT: isDevelopment,
                ENV_IS: JSON.stringify(env),
            })
        ]
    };

    if (isDevelopment) {

        const devServerConfig = {
            devServer: {
                contentBase: path.resolve(__dirname, 'app'),
                publicPath: '/dist/',
                watchContentBase: false,
                hotOnly: true,
                overlay: true
            },
            mode : 'development',
            plugins: [
                new webpack.NamedModulesPlugin(),
                new webpack.HotModuleReplacementPlugin()
            ],
            devtool : 'source-map'
        };

        return merge(
            baseConfig,
            devServerConfig
        );
    }
    else {
        return merge(
            baseConfig,
            babelConfig
        );
    }
};