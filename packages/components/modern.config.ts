import { defineConfig, moduleTools } from "@modern-js/module-tools";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";

export default defineConfig({
  plugins: [moduleTools(), tailwindcssPlugin()],
  buildPreset: "npm-component-with-umd",
  buildConfig: {
    asset: {
      svgr: {
        exportType: "named",
      },
    },
    jsx: "transform",
    tsconfig: "./tsconfig.build.json",
  },
});
