module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/main.scss";`,
      },
    },
  },
};
