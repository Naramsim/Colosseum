const path = require('path')
const OfflinePlugin = require('offline-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const offlinePluginOptions = {
    caches:{
        main:[
            'index.js',
            'index.html',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-animate.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.0.1/color-thief.min.js',
            'https://fonts.googleapis.com/css?family=Montserrat:400,700'
        ]
    },
    externals: [
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-animate.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.0.1/color-thief.min.js',
        'https://fonts.googleapis.com/css?family=Montserrat:400,700'
    ],
    ServiceWorker: {
        events: true
    },
    version: '[hash]'
}

module.exports = {
    target: 'web',
    devtool: 'sourcemap',
    entry: {
        'index': './src/scripts/index.js'
    },
    output: {
        libraryTarget: 'umd',
        path: 'dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
            test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['ng-annotate', 'babel?presets[]=es2015']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader?interpolate=require"
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[name][hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }
        ]
    },
    plugins: [
        new WebpackShellPlugin({onBuildStart:[], onBuildEnd:['npm run copyManifest'], dev: 0}),
        new HtmlWebpackPlugin({
            template: 'src/include/index.html',
            inject: 'head',
            hash: true,
            cache: false
        }),
        new OfflinePlugin(offlinePluginOptions)
    ]
};
