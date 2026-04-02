import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        mist: "#eff4ff",
        panel: "#121a30",
        accent: "#83e1d0",
        coral: "#ff7c66",
        gold: "#f6c56f"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(131,225,208,0.15), transparent 28%), radial-gradient(circle at 80% 0%, rgba(246,197,111,0.16), transparent 32%), radial-gradient(circle at 50% 100%, rgba(255,124,102,0.12), transparent 36%)"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(7, 11, 24, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
