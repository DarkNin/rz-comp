module.exports = {
  publicPath: '/rz_comp/',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  css: { extract: false },
  productionSourceMap: false
};