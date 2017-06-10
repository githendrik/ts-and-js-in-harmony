module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }, // Compile TS to JS
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // Handle css imports
            { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" } // Extract Source maps from libraries!
        ]
    },
    devtool: 'source-map'
}