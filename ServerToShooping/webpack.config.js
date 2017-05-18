/**
 * Created by y5049 on 2017/5/13.
 */

//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.resolve(__dirname, './react/src'),

    entry: {
        app: './main.js',
        login:'./login.js'
    },
    output: {
        path: path.resolve(__dirname, './react/public'),            //打包后的文件存放的地方
        filename: "[name].bundle.js"                                //打包后输出文件的文件名
    },

    module: {
        rules:
            [
                {
                    test: /\.css$/,
                    use:
                        [
                            { loader: 'style-loader'},
                            {
                                loader: 'css-loader',
                                options: { modules: true }
                            }
                        ],//添加对样式表的处理
                },
                {
                    test: /\.json$/,
                    use: ['json-loader',]
                },
                {
                    test: /\.js$/,

                    use: [{
                        loader: 'babel-loader',
                        options: { presets: ['es2015','react'] },

                    }],
                },
                {
                    test: /\.(png|jpg)$/,

                    use: [{
                        loader: 'url-loader',
                        options: { limit: 81920,name:'images/[hash:8].[name].[ext]' },

                    }],
                },

            ]
    },


};
