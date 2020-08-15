
// 导入速度分析插件
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

// 导入体积分析插件
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


// 实例化插件
const smp = new SpeedMeasurePlugin();
module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        //开发环境下设置为编译好以后直接打开浏览器浏览
        open: true
    },
    configureWebpack: config => {
        //调试JS
        config.devtool = "source-map";
    },
    css: {
        //查看CSS属于哪个css文件
        sourceMap: true
    },

    configureWebpack: smp.wrap({
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['thread-loader']
                }
            ]
        },
        plugins: [
            // 这里是自己项目里需要使用到的其他插件
            // 实例化体积分析插件
            new BundleAnalyzerPlugin(),

        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    parallel: 4
                })
            ]
        }
    })

}


