const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    mymusic: './src/scripts/pages/mymusic/main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mymusic',
      filename: 'mymusic.html',
      template: './src/pages/mymusic/index.html',
      chunks: ['mymusic']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3.Inject styles into DOM
          'css-loader',   // 2.Turns css into commonjs
        ]
        // "css-loader" khi nó tìm thất file css thì nó sẽ biên dịch file css đó thành file javascript
        // và sau đó nó được inject vào dome thông qua "style-loader"
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      },
    ]
  }
}