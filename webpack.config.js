const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test:/\.(js)$/, use:'babel-loader'},
            {test:/\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    plugins : [
        new HtmlWebpackPlugin({template:'./index.html'})
    ],
    devServer:{
        historyApiFallback: true,
        port:8081
    }
}