module.exports = function override(config, env) {
  config.module.rules.unshift({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  return config;
};
