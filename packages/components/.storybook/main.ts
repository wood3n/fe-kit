import type { StorybookConfig } from "@storybook/react-vite";
import svgr from "@svgr/rollup";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        backgrounds: false,
        measure: false, // 禁用 measure 插件
        outline: false, // 禁用 outline 插件
      },
    },
  ],
  framework: "@storybook/react-vite",
  staticDirs: ["../public"],
  viteFinal(config) {
    // Add your configuration here
    config.plugins?.push(svgr());
    return config;
  },
};
export default config;
