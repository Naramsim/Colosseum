module.exports = {
    target: 'web',
    devtool: 'sourcemap',
    entry: {
        './index': './src/index.js'
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
                loader: 'style!css'
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
    }
};
