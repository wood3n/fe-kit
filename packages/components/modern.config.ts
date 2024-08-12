import { defineConfig, moduleTools } from "@modern-js/module-tools";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";

export default defineConfig({
  plugins: [moduleTools(), tailwindcssPlugin()],
  buildConfig: [
    {
      format: "esm",
      target: "es6",
      buildType: "bundleless",
      outDir: "es",
      tsconfig: "./tsconfig.build.json",
    },
    {
      format: "cjs",
      target: "es6",
      buildType: "bundleless",
      outDir: "lib",
      tsconfig: "./tsconfig.build.json",
    },
    {
      format: "umd",
      target: "es6",
      platform: "browser",
      buildType: "bundle",
      outDir: "./dist",
      dts: false,
    },
  ],
});
