import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  fonts: {
    body: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  colors: {
    primary: theme.colors.purple,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "primary.500",
        _dark: {
          color: "primary.400",
        },
      },
    },
    Stat: {
      parts: ["helpText"],
      baseStyle: {
        helpText: {
          color: "primary.700",
          _dark: {
            color: "primary.100",
          },
        },
      },
    },
  },
});
