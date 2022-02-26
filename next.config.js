const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: isDev ? "" : "/tulip/",
};
