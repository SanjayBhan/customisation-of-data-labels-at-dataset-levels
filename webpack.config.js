const path = require('path'),
  fs = require('fs-extra'),
  WrapperPlugin = require('wrapper-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function getBabelPlugins () {
  return [
    ['syntax-dynamic-import'],
    ['transform-es3-member-expression-literals'],
    ['transform-es3-property-literals'],
    ['transform-proto-to-assign']
  ];
};

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

let moduleWrapperHeader = `
(function (factory) {
  if (typeof module === 'object' && typeof module.exports !== "undefined") {
      module.exports = factory;
  } else {
      var FusionCharts = window.FusionCharts;
      factory(FusionCharts);
  }
}(function (FusionCharts) {
`,
  moduleWrapperFooter = `
}));
`;

function getPlugins(isSource, isSample) {
  var plugins = [];

  if (!isSample) {
    plugins.push(new WrapperPlugin({
      test: /\.js$/,
      header: moduleWrapperHeader,
      footer: moduleWrapperFooter
    }));
  }

  if (!isSource) {
    plugins.push(
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 5,
          ie8: true,
          mangle: true,
          compress: false,
          keep_classnames: true,
          keep_fnames: false
        }
      })
    );
  }
  return plugins;
}

module.exports = env => {
  if (env === 'sample') {
    return [{
      entry: './sample/src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'sample/js')
      },
      plugins: getPlugins(false, true),
      module: moduleConfig,
      mode: 'none'
    }];
  } else {
    fs.emptyDirSync('./es/');
    fs.copySync('./src/extension.js', './es/index.js');
    fs.emptyDirSync('./dist/');
    return [{
      entry: './src/index.js',
      output: {
        filename: 'fusioncharts.extension.customize-data-labels-at-dataset-level.js',
        path: path.resolve(__dirname, 'dist')
      },
      externals: /^(fusioncharts)$/i,
      plugins: getPlugins(true),
      module: moduleConfig,
      mode: 'none',
      devtool: 'source-map'
    }, {
      entry: './src/index.js',
      output: {
        filename: 'fusioncharts.extension.customize-data-labels-at-dataset-level.min.js',
        path: path.resolve(__dirname, 'dist')
      },
      externals: /^(fusioncharts)$/i,
      plugins: getPlugins(false),
      module: moduleConfig,
      mode: 'none',
      devtool: 'source-map'
    }];
  }
};