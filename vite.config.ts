import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reactMarkdown from "@pity/vite-plugin-react-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://radon333.github.io",
  plugins: [react(), reactMarkdown()],
});
