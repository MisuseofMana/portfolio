module.exports = {
	lintOnSave: false, 
    outputDir: "docs",
    publicPath: './',
    chainWebpack: (config) => {
        config.module
            .rule('txt')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end();
    },
}