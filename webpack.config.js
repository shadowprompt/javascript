var path = require('path');

module.exports = {
    entry: './test/rxjs/index.js',
    devtool: 'sourcemap',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.vue', '.scss', '.css']
    }
};
