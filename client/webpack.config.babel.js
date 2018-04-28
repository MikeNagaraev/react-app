import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const rootPath = path.resolve(__dirname);
const srcPath = path.resolve(__dirname, "src");
const publicPath = path.resolve(__dirname, "public");
const nodeModules = path.resolve(__dirname, "node_modules");
const staticPath = path.resolve(__dirname, "static");

const outputPathName = "src/index.min.js";

const plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(rootPath, "index.html"),
        inject: "body"
    }),
    new CopyWebpackPlugin([
        {
            from: "static",
            to: "assets"
        }
    ]),
    new ExtractTextPlugin("src/styles.min.css")
];

const rules = [
    {
        test: /\.(eot|svg|ttf)$/,
        use: [
            {
                loader: "url-loader",
                options: {
                    name: path.resolve(staticPath, "fonts/**/[name].[ext]")
                }
            }
        ]
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
            {
                loader: "url-loader",
                options: {
                    name: path.resolve(staticPath, "images/[name].[ext]")
                }
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
        test: /\.(css|less)$/,
        exclude: nodeModules,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                "less-loader"
            ]
        })
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