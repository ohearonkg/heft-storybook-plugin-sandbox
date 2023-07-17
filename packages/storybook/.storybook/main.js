module.exports = {
  stories: ["../lib/**/*.stories.js", "../lib/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  staticDirs: ["../storybook-public"],
};
