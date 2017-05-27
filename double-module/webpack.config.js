module.exports = {
    entry: './src/Module.ts',
    output: {
        filename: 'module.js',
        path: __dirname + '/dist',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    devtool: 'source-map'
}