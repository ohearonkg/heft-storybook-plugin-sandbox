const path = require("path");
const { merge } = require("webpack-merge");

module.exports = async ({ config, mode }) => {
  return merge(config, {
    module: {
      // INFO(kgohearon): Use style-loader, css-loader,
      // and sass-loader to process SCSS module files.
      rules: [
        {
          test: /\.s(a|c)ss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: true,
                  localIdentName: "[name]__[local]--[hash:base64:5]",
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
  });
};
