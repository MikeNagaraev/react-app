import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import webpackBase from './webpack.babel.base.js';
import merge from 'webpack-merge';

export default merge(webpackBase(), {
    plugins: [
        new UglifyJSPlugin()
    ]
});
