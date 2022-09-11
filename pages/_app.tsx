import type {AppProps} from "next/app";

import {
  Box,
  ChakraProvider,
  Container,
  Hide,
  IconButton,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import {CalendarIcon, ChatIcon, MoonIcon, SunIcon} from "@chakra-ui/icons";

import theme from "../theme";

import "../globals.css";

function App({Component, pageProps}: AppProps) {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <>
      <Head>
        <title>Gonzalo Pozzo</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Start meta tags */}
        <meta content="Gonzalo Pozzo" name="title" />
        <meta content="Gonzalo Pozzo" name="copyright" />
        <meta content="goncy" name="author" />
        <meta
          content="I'm Gonzalo Pozzo, a frontend developer and content creator from Argentina, focused in helping people to land their first job in IT"
          name="description"
        />
        <meta content="gray" name="theme-color" />
        <meta content="trabajo,frontend,backend,trainee,junior,semisenior,senior" name="keywords" />
        {/* End meta tags */}
      </Head>
      <Stack spacing={16}>
        <Container maxWidth="container.md" paddingBottom={4}>
          <Hide breakpoint="print">
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              paddingBottom={{base: 12, md: 36}}
              paddingTop={4}
            >
              <Text as="h1" fontSize="lg" fontWeight={500} marginRight="auto">
                Gonzalo Pozzo
              </Text>
              <Stack direction="row">
                <Link isExternal href="https://whatsapp.goncy.dev">
                  <IconButton aria-label="whatsapp" icon={<ChatIcon />} variant="ghost" />
                </Link>
                <Link isExternal href="https://calendar.goncy.dev">
                  <IconButton aria-label="calendar" icon={<CalendarIcon />} variant="ghost" />
                </Link>
                <IconButton
                  aria-label="color mode toggle"
                  icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
                  variant="ghost"
                  onClick={toggleColorMode}
                />
              </Stack>
            </Stack>
          </Hide>
          <Component {...pageProps} />
        </Container>
        <Hide breakpoint="print">
          <Box
            _dark={{borderColor: "whiteAlpha.200"}}
            borderColor="blackAlpha.200"
            borderTopWidth={1}
            paddingY={4}
          >
            <Container
              _dark={{color: "whiteAlpha.600"}}
              color="blackAlpha.600"
              maxWidth="container.md"
            >
              <Stack alignItems="center" direction="row" justifyContent="space-between">
                <Text>Read less, do more.</Text>
                <Text>Quilmes: {new Date().getFullYear()}</Text>
              </Stack>
            </Container>
          </Box>
        </Hide>
      </Stack>
    </>
  );
}

function AppContainer(props: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <App {...props} />
    </ChakraProvider>
  );
}

export default AppContainer;
