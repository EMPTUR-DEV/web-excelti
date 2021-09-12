const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.(jpg|png)$/,
            use: {
                loader: 'url-loader',
            }
        }],
    }

};