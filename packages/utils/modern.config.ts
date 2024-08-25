import { defineConfig, moduleTools } from "@modern-js/module-tools";

export default defineConfig({
  plugins: [moduleTools()],
  buildPreset: "npm-component-with-umd",
  buildConfig: {
    tsconfig: "./tsconfig.build.json",
  },
});
