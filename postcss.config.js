module.exports = {
  plugins: {
    'postcss-pxtorem': {
      unitPrecision: 5,
      selectorBlackList: [
        '.van',
        '.norem'
      ], //过滤的类名 榜单
      replace: true,
      mediaQuery: false,
      minPixelValue: 6,
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
