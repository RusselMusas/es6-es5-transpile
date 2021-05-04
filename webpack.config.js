var path = require('path');
// var webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        app: './js/main.js',
        ratefinder: ['core-js/es/promise','./js/ratefinder.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
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
    plugins: [],
    stats: {
        colors: true
    }
};