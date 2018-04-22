export default (env) => {
    const ENV = env.production ? 'production' : 'development';
    return ENV == "production"
        ? require('./webpack.babel.prod.js')(ENV)
        : require('./webpack.babel.dev.js')(ENV)
};