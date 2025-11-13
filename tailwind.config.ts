import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b1220",
        neon: "#1ef2d5",
        smoke: "#f6f7fb"
      },
      boxShadow: {
        card: "0 8px 22px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
