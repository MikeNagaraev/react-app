import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const rootPath = path.resolve(__dirname);
const srcPath = path.resolve(__dirname, "src");
const publicPath = path.resolve(__dirname, "public");
const nodeModules = path.resolve(__dirname, "node_modules");

const outputPathName = "src/index.min.js";

const plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(rootPath, "index.html"),
        inject: "body"
    })
];

const rules = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            presets: ['react']
        }
    },
    {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: "file-loader?name=[path][name].[ext]"
    },
    {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
            sourceMap: true
        }
    }
];

export default (ENV) => {
    const config = {
        mode: ENV,
        resolve: {
            extensions: [
                ".js", ".jsx", ".json", ".css", ".less"
            ]
        },
        entry: [
            srcPath
        ],
        output: {
            path: publicPath,
            filename: outputPathName
        },
        module: {
            rules
        },
        devServer: {
            contentBase: publicPath,
            port: 9000
        },
        plugins: plugins,
        devtool: ENV == "production" ? "" : "source-map"
    };

    return config;
};