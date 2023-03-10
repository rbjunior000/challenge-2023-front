import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#ddf4ff",
    100: "#addbff",
    200: "#7dc2ff",
    300: "#4ba9ff",
    400: "#1b91fd",
    500: "#0277e4",
    600: "#005db2",
    700: "#004280",
    800: "#002850",
    900: "#000e20",
  },
};

const theme = extendTheme({
  colors,
  components: {
    ModalHeader: {
      baseStyle: {
        borderRadius: "6px 6px 0 0;",
      },
    },
  },
});

export default theme;
