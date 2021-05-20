var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackSkipAssetsPlugin = require("html-webpack-skip-assets-plugin").HtmlWebpackSkipAssetsPlugin;
var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    stats: {
        colors: true
    }
};
