import fs from "fs";
import { join } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const srcDir = join(__dirname, "src");

const getEntries = () => {
  const temps = fs.readdirSync(srcDir);

  return temps.reduce<string[]>((acc, tempName) => {
    const tempPath = join(srcDir, tempName);

    if (fs.statSync(tempPath).isDirectory() && tempName !== "stories") {
      acc.push(join(tempPath, "index.tsx"));
    }

    return acc;
  }, []);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: ".",
    lib: {
      entry: getEntries(),
      name: "DevKit",
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}/index.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        preserveModules: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
