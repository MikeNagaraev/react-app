import prodWebpack from "./webpack.babel.prod";
import devWebpack from "./webpack.babel.dev";

export default (env) => {
    const ENV = env.production ? 'production' : 'development';
    return env.production ? prodWebpack(ENV) : devWebpack(ENV);
}