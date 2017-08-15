var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var autoprefixer = require('autoprefixer');
require('babel-polyfill');

module.exports = {
    entry: {
        'bundle': ['babel-polyfill', './js/app.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'js'),
                query: {
                    presets: 'es2015',
                }
            },
            {
                test: /\.scss$/,
                //loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader')
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-url!postcss-loader!sass-loader')
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc',
        fix: true
    },
    postcss: [autoprefixer],
    sassLoader: {},
    plugins: [
        //for creating seperate css bundle
        new ExtractTextPlugin("bundle.css", {
            allChunks: true
        }),
        new StyleLintPlugin({
            configFile: '.stylelintrc.json'
        })
    ],
    devtool: 'source-map'
};
