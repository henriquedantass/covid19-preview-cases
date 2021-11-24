import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto,",
  },
  colors: {
    blue: {
      primary: "#4FB2EF",
    },
  },
  styles: {
    global: {
      body: {
        background:
          "linear-gradient(140deg, rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.91)), linear-gradient(286.67deg, rgba(254, 0, 0, 0.2) -0.05%, rgba(0, 194, 255, 1)0%)",
        color: "black",
      },
    },
  },
});
