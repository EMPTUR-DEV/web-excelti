const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const devConfig ={
    mode:"development",
    devServer:{
        port:3000,
        watchFiles:"../dist",
        open: true,
        historyApiFallback: true
    },
    devtool:"eval-source-map",
    module:{
        rules:[{
            use:["style-loader","css-loader","sass-loader"],
            test:/.(css|sass|scss)$/
        }]
    },    
};
module.exports = merge(common,devConfig);