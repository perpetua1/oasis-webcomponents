/** @type { import('@web/storybook-framework-web-components').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.md",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@web/storybook-framework-web-components",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  wdsFinal(config) {
    return { ...config, watch: true};
  }
};
export default config;
