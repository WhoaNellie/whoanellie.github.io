let path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  entry: "./src/index.jsx",
  output: {
    path: path.resolve("./dist/js"),
    filename: "script.bundle.js",
  },
  resolve: { extensions: [".js", ".jsx"] },
  mode: "development",
  watch: true,
};