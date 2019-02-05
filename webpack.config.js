const path = require('path'),
  fs = require('fs-extra'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let moduleConfig = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          compact: false,
          babelrc: false,
          cacheDirectory: true,
          plugins: getBabelPlugins(),
          presets: [['env', {
            targets: { browsers: ['> 0.1%'] },
            loose: true
          }]]
        }
      }
    }
  ]
};

function getBabelPlugins () {
  return [
    ['syntax-dynamic-import'],
    ['transform-es3-member-expression-literals'],
    ['transform-es3-property-literals'],
    ['transform-proto-to-assign']
  ];
};

function getWebpackOptimizations () {
  let optimization = {};

  optimization.minimize = true;
  optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        ecma: 5,
        ie8: true,
        mangle: false,
        compress: false,
        keep_classnames: true,
        keep_fnames: true
      }
    })
  ];
  return optimization;
};

module.exports = env => {
  if (env === 'sample') {
    return [{
      entry: './sample/src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'sample/js')
      },
      optimization: getWebpackOptimizations(),
      mode: 'none'
    }];
  } else {
    fs.emptyDirSync('./es/');
    fs.copySync('./src/extension.js', './es/index.js');
    fs.emptyDirSync('./browser/');
    return [{
      entry: './src/index.js',
      output: {
        filename: 'fusioncharts.extension.customize-data-labels-at-dataset-level.js',
        path: path.resolve(__dirname, 'browser'),
        libraryTarget: 'umd',
        libraryExport: 'default'
      },
      externals: /^(fusioncharts)$/i,
      module: moduleConfig,
      mode: 'none',
      devtool: 'source-map'
    }, {
      entry: './src/index.js',
      output: {
        filename: 'fusioncharts.extension.customize-data-labels-at-dataset-level.min.js',
        path: path.resolve(__dirname, 'browser'),
        libraryTarget: 'umd',
        libraryExport: 'default'
      },
      externals: /^(fusioncharts)$/i,
      module: moduleConfig,
      mode: 'none',
      devtool: 'source-map',
      optimization: getWebpackOptimizations()
    }, {
      entry: './src/extension.js',
      output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './'),
        libraryTarget: 'umd',
        libraryExport: 'default'
      },
      externals: /^(fusioncharts)$/i,
      module: moduleConfig,
      mode: 'none'
    }];
  }
};