import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or your specific plugin

// https://vitejs.dev/config/
export default defineConfig({
  base: "/RUTHRABALAN/", // ADD THIS LINE (must match your repo name exactly)
  plugins: [react()],
  // ... keep the rest of your existing settings
});
