// const path = require('path');
// function resolve (dir) {
//     return path.join(__dirname, dir)
// }

// const vuxLoader = require('vux-loader')
// const vueLoaderConfig = require('vue-loader')

module.exports = {
    devServer: {
        port: 8080, // 端口号
        host: '0.0.0.0',
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://211.67.177.56:8080/hhdj',
                // ws: true,
                // changeOrigin: false,
                pathRewrite: {
                  '/api': '/'
                }
              },
        },
    },

    // lintOnSave: true,
    // chainWebpack: (config)=>{
    //     config.resolve.alias
    //         .set('@$', resolve('src'))
    //         .set('assets',resolve('src/assets'))
    //         .set('components',resolve('src/components'))
    //         .set('layout',resolve('src/layout'))
    //         .set('base',resolve('src/base'))
    //         .set('static',resolve('src/static'))
    // },
    
    // resolve: {
    // extensions: ['.js', '.vue', '.json', 'less'],
    // alias: {
    //   'vue$': 'vue/dist/vue.esm.js',
    //   '@': resolve('src'),
    // },
    // },

    // module: {
    //     rules: [
    //               {
    //                 test: /\.vue$/,
    //                 loader: 'vue-loader',
    //                 options: vueLoaderConfig
    //               },
    //         ]
    // },
}
// module.exports = vuxLoader.merge(webpackConfig, {
//     plugins: ['vux-ui']
// })