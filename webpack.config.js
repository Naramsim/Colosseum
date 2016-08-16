const path = require('path')
const OfflinePlugin = require('offline-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const offlinePluginOptions = {
    caches:{
        main:[
            'index.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-animate.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.0.1/color-thief.min.js'
        ]
    },
    externals: [
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-animate.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.0.1/color-thief.min.js'
    ],
    ServiceWorker: {
        events: true
    },
    publicPath: '/Colosseum/dist/',
    relativePaths: false
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
        filename: '[name].js',
        publicPath: 'dist/'
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
        new WebpackShellPlugin({onBuildStart:[], onBuildEnd:['npm run copyHTMLToRoot'], dev: 0}),
        new HtmlWebpackPlugin({
            template: 'src/include/index.html',
            inject: 'head',
            hash: true,
            cache: false
        }),
        new OfflinePlugin(offlinePluginOptions)
    ]
};
