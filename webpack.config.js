var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        main: ['babel-polyfill', './js/main.js', './js/ratefinder.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    plugins: [
        // Inject Jquery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        // Generate an external css file
        new MiniCssExtractPlugin({
          filename: "[name].bundle.css",
        }),
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: 'body'
        }),
        new HtmlWebpackPlugin({
          filename: 'ratefinder.html',
          template: 'ratefinder.html',
          inject: 'body',
          script: ''
        })
    ],
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    stats: {
        colors: true
    }
};
