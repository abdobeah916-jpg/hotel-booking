import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? "/hotel-booking/" : "/",
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
  // Removed proxy since we're making direct requests to backend
});
