import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const rootPath = path.resolve(__dirname);
const appPath = path.resolve(__dirname, "src");
const publicPath = path.resolve(__dirname, "public");
const nodeModules = path.resolve(__dirname, "node_modules");

const outputPathName = "src/index.min.js";

const plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(rootPath, "index.html"),
        inject: "body"
    }),
];

const rules = [
    {
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader'
            }
        ]
    },
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

export default (options) => {
    let BUILD = options.BUILD;

    const config = {
        resolve: {
            extensions: [
                ".js", ".jsx", ".json", ".css"
            ]
        },
        entry: [
            path.resolve(appPath, "index.js")
        ],
        output: {
            path: publicPath,
            filename: outputPathName
        },
        devServer: {
            port: 9000,
            contentBase: publicPath
        },
        module: {
            rules
        },
        plugins: plugins,
        devtool: BUILD ? "source-map" : ""
    };
    
    return config;
};