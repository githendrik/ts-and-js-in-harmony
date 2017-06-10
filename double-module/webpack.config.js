const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/Module.ts',
    output: {
        filename: 'module.js',
        path: __dirname + '/dist',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({ use: 'css-loader' }) }
        ]
    },
    plugins: [new ExtractTextPlugin('styles.css')],
    externals: {
        'lodash': { // so we don't bundle this, but rather have it as a peerDependency
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    devtool: 'source-map'
}