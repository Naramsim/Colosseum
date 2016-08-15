const OfflinePlugin = require('offline-plugin');

const offlinePluginOptions = {
    caches:{
        main:[
            './dist/index.js',
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
    }
}

module.exports = {
    target: 'web',
    devtool: 'sourcemap',
    entry: {
        './dist/index': './src/scripts/index.js'
    },
    output: {
        libraryTarget: 'umd',
        path: '.',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
            test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['ng-annotate', 'babel?presets[]=es2015']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new OfflinePlugin(offlinePluginOptions)
    ]
};
