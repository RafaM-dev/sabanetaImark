import { defineConfig } from 'vite'
import withMT from "@material-tailwind/react/utils/withMT";

export default defineConfig(
  withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          custom: ['MiFuente', 'sans-serif'], // 'CustomFont' es el nombre de la fuente
        },
        colors: {
          darkGreen: "#3F4A54",
          greenPrimary: "#2EAA84",
          orangeBtn: "#ff6730",
          darkOrange: "#AA431E",
          titleColor: "#006944",
          blueColor: "#36B8C5"
        },
      },
    },
    plugins: [],
  })
);
