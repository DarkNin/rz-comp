module.exports = {
  publicPath: '/rz_comp/',
/*

  chainWebpack: config => {
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('copy');
  },

  configureWebpack: {
    entry: "./src/index.js",
    output: {
      filename: 'rz_comp.min.js',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
  },
*/
  css: { extract: false },
  productionSourceMap: false
};