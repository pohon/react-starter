const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (opts = {}) => {
  const extractSass = new ExtractTextPlugin(opts.sass || {
    filename: './styles/styles.css'
  });

  return {
    devServer: ({ host, port, contentBase, https = false, historyApiFallback = false }) => ({
      devServer: {
        //stats:"errors-only",
        host,
        port,
        contentBase,
        https,
        overlay: {
          errors: true,
          warnings: false
        },
        historyApiFallback
      }
    }),
    modules: ($opts, $rulesBefore, $rulesAfter) => {
      let mods = {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            //proses semua file SCSS yang dipake
            test: /\.scss$/,
            use: extractSass.extract({
              use: [
                'css-loader',
                'sass-loader'
              ]
            })
          },
          {
            //proses semua file gambar
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  //pake relative-path di HTML
                  // & Webpack dev server
                  useRelativePath: true,
                  //simpan image di sini
                  outputPath: 'images/' //relative to webpack output path
                }
              }
            ]
          }
        ]
      };

      if (Array.isArray($rulesBefore)) {
        mods.rules = $rulesBefore.concat(mods.rules);
      }

      if (Array.isArray($rulesAfter)) {
        mods.rules = mods.rules.concat($rulesAfter);
      }

      if ($opts) {
        mods = Object.assign(mods, $opts);
      }

      return {
        module: mods
      };
    },
    plugins: (moreplugins = []) => {
      return {
        plugins: [
          extractSass
        ].concat(moreplugins)
      };
    }
  };
};
