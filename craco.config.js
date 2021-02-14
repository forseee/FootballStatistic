module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.football-data.org/v2/",
        pathRewrite: { "^/api": "" },
      },
    },
  },
}