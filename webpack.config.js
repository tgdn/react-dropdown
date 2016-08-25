var path = require('path')
var webpack = require('webpack')

const fs = require('fs');
const srcFolder = path.join(__dirname, 'src', 'components');
const stylesheetFolder = path.join(__dirname, 'css');
const components = fs.readdirSync(srcFolder);
const stylesheets = fs.readdirSync(stylesheetFolder);

const files = [];
const entries = {};

components.forEach(component => {
  var name = component.split('.')[0];
  var file = `./src/components/${name}`;
  files.push(file);
  entries[name] = file;
});

stylesheets.forEach(stylesheet => {
  var name = stylesheet.split('.')[0];
  var file = `./css/${name}`;
  files.push(file);
  entries[name] = file;
});


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: entries,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname,
        query: {
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread']
        }
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
    },
      {
        test:   /\.sass$/,
        loaders: ['style', 'raw', 'sass'],
        include: __dirname
      },
    ]
  }
}
