/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", 
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}", 
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideBottom: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "opacity(0)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "opacity(1)",
          },
        },
        slideTop: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "opacity(0)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "opacity(1)",
          },
        },
        opacition: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        twinkle: {
          "0%": {
            filter: "drop-shadow(0 0 0 #84cc16)",
          },
          "100%": {
            filter: "drop-shadow(0 0 20px #84cc16)",
          },
        },
      },
      animation: {
        slideBottom: "slideBottom 1s ease-in-out",
        slideTop: "slideTop 1s ease-in-out",
        opacition: "opacition 3s ease-in-out",
        scaleUp: "scaleUp 1s ease-in-out",
        twinkle: "twinkle 1s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
