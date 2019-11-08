const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".tsx", ".ts", ".json"]
    }
}
