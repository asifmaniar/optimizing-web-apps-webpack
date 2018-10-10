const path = require('path');
const webpack = require('webpack');

const isDevelopment = true;

console.log(`This is a ${isDevelopment ? "development" : "production"} build`);

const baseConfig = {
    entry: './app/app.js',
    output: {
        path : path.resolve(__dirname, 'app/dist/'),
        filename: 'app.bundle.js',
        publicPath :  '/dist/'
    },
    devServer: {
        contentBase :  path.resolve(__dirname, 'app'),
        watchContentBase : false,
        hotOnly: true
    },
    plugins: [

    ],
    mode : 'development',
    watch: true
}

if (isDevelopment) {
    baseConfig.plugins.push( new webpack.HotModuleReplacementPlugin());
}

module.exports = baseConfig;