import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    viewport: {
      disable: true,
    },
    options: {
      storySort: {
        order: ["*", "Changelog"],
      },
    },
    github: {
      repository: "wood3n/fe-kit",
      branch: "master/packages/components",
    },
  },
};

export default preview;
