import path from "path";

module.exports = {
    outputDir:process.env.outputDir,
    // 调整内部的 webpack 配置
    configureWebpack: {
        resolve: {
            alias: {
                "~/": `${path.resolve(__dirname, "src")}/`,
            },
            // .mjs needed for https://github.com/graphql/graphql-js/issues/1272
            extensions: ['*', '.mjs', '.js', '.vue', '.json', '.gql', '.graphql']
        },
        module: {
            unknownContextCritical:false,
            rules: [ // fixes https://github.com/graphql/graphql-js/issues/1272
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: 'javascript/auto'
                }
            ]
        },
        devServer:{
            proxy:{
                '/hcaptcha':{
                    target:'https://hcaptcha.com',
                    ws:true,
                    changeOrigin:true,
                    pathRewrite:{
                        '^/hcaptcha':'/'
                    }
                }
            }
        }

    }
}
