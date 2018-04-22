import webpackBase from './webpack.babel.base.js';
import merge from 'webpack-merge';
import path from "path";

const publicPath = path.resolve(__dirname, "public");

export default (env) => {
    return merge(webpackBase(env), {
        devtool: 'source-map',
        devServer: {
            contentBase: publicPath,
            port: 9000
        }
    });
}
