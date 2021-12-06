module.exports = {
  env: {
    API_COVID19: process.env.API_COVID19,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
