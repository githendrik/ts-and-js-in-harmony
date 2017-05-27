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
    externals: {
        "lodash": { // so we don't bundle this, but rather have it as a peerDependency
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_"
        }
    },
    devtool: 'source-map'
}