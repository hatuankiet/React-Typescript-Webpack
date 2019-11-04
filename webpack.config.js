const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : './src/index.tsx',
    output: {
        path: path.resolve(__dirname,"build"),
        filename : "bundle.js"
    },
    module : {},
    plugins: []
}
