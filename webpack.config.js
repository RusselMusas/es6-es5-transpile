var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackSkipAssetsPlugin = require("html-webpack-skip-assets-plugin").HtmlWebpackSkipAssetsPlugin;

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        main: ['babel-polyfill', './js/main.js', './css/styles.css'],
        ratefinder: ['babel-polyfill', './js/ratefinder.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './js/[name].bundle.[chunkhash].js'
    },
    plugins: [
        // Inject Jquery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        // Generate an external css file
        new MiniCssExtractPlugin({
          filename: "./css/[name].bundle.[chunkhash].css",
        }),
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: 'body',
          excludeAssets: ["./js/ratefinder.**.**.js"]
        }),
        new HtmlWebpackPlugin({
          filename: 'ratefinder.html',
          template: 'ratefinder.html',
          inject: 'body',
          excludeAssets: ["./js/main.**.**.js", "./css/main.**.**.css"]
        }),
        new HtmlWebpackSkipAssetsPlugin()
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
