var path = require('path')
var webpack = require('webpack')


module.exports = {
    module: {
        loaders: [
            {
                test: /\.sass$/,
                loaders: ['style', 'raw', 'sass'],
                include: path.resolve(__dirname, '../css/')
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
}
