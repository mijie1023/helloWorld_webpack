var path = require('path');

// // 优化合并使其尽可能加速 不让 Webpack 去遍历 React JS 及其所有依赖
var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = [
  'react/dist/react.min.js',
  'react-dom/dist/react-dom.min.js'
];

var config = {
   entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8090',
      path.resolve(__dirname, 'app/main.js')
   ],
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
   },
   module: {
      noParse: [],
      loaders: [{
         test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
         loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
         query: {
            presets: ['es2015', 'react']
         }
      },
      {
         test: /\.css$/, // Only .css files
         loader: 'style!css' // Run both loaders
      },
      {// LESS
         test: /\.less$/,
         loader: 'style!css!less'
      },
      {
         test: /\.(png|jpg)$/,
         loader: 'url?limit=25000'
      },
      {
         test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         loader: 'url?limit=100000'
      }]
   },
   resolve: {
      alias: {}
   }
};

deps.forEach(function (dep) {
   var depPath = path.resolve(node_modules_dir, dep);
   config.resolve.alias[dep.split(path.sep)[0]] = depPath;
   config.module.noParse.push(depPath);
});

module.exports = config;