const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "script.bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      // JS/JSX loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // SASS loader
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // Injects styles into DOM
          "css-loader", // Turns CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },

      // SVG loader for React component imports
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },

      // Asset loader fallback for images/fonts
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  mode: "development",
  watch: true,
};
