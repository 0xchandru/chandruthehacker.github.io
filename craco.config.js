// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        {
          module: /@mediapipe\/tasks-vision/,
          message: /Failed to parse source map/,
        },
      ];
      return webpackConfig;
    },
  },
};
