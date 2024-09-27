import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "ap-blue": "#0060AF",
        "ap-gray": "#656565",
        "ap-red": "#E70000",
        "ap-orange/60": "#FF911999",
        "ap-orange": "#FF9119",
        "ap-yellow/60": "#FFE71099",
        "ap-green": "#00AE44",
        "ap-desert_sand":"#EEDCB2"
      },
      width: {
        "90%": "90%",
        "93%": "93%",
        "95%": "95%",
        "178px": "178px",
      },
      height: {
        "100px": "6.25rem",
        "38px": "38px",
        "90%": "90%",
        "93%": "93%",
        "95%": "95%",
        "76px": "76px",
        "148px": "148px",
        "358px": "358px",
        "689px": "689px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "20px": "20px",
        "30px": "30px",
      },
      spacing: {
        "14px": "14px",
        "73px": "73px",
        "30px": "30px",
      },
      boxShadow: {
        "ap-shadow": " 0px 4px 20px 0px #0000004D",
      },
    },
  },
  plugins: [],
};
export default config;
