const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const path = require("path");


function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  baseUrl: process.env.NODE_ENV === "development" ? "/" : "./",
  devServer: {
    port: 9096,
    open: true
  },
  // vue-echarts-v3需要babel转码，才能兼容ie
  // 参考 https://github.com/xlsdg/vue-echarts-v3#usage
  transpileDependencies: ["node_modules/vue-echarts-v3/src"],
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "@/styles/index.scss";`
      }
    }
  },
  // 生产环境打包去除console.log
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true
            }
          },
          sourceMap: false
        })
      ]
    }
  }
};
