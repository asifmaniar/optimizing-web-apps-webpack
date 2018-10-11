const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    //'tee-loader?label=after',
                    'babel-loader',
                    /*{
                      loader: 'tee-loader',
                      options: {
                        label: 'before'
                      }
                    }*/
                ]
            }
        ]
    }
};