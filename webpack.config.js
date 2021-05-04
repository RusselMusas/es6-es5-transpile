var path = require('path');
// var webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    stats: {
        colors: true
    }
};