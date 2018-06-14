const path = require('path');
const ngToolsWebpack = require('@ngtools/webpack');

module.exports = {
    mode: "production",
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: ['@ngtools/webpack']
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: './bundle.[name].js',
    },
    plugins: [
        new ngToolsWebpack.AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            // compilerOptions: {
            //     module: "es6",
            // },
        }),
    ],
};