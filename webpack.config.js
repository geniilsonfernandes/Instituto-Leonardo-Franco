const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWepackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new HtmlWepackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWepackPlugin({
      filename: "transparencia.html",
      template: "./src/transparencia.html",
    }),
    new HtmlWepackPlugin({
      filename: "sobre.html",
      template: "./src/sobre.html",
    }),
    new HtmlWepackPlugin({
      filename: "projetos.html",
      template: "./src/projetos.html",
    }),
    new HtmlWepackPlugin({
      filename: "doacao.html",
      template: "./src/doacao.html",
    }),
  ],
};
