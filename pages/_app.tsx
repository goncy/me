import type {AppProps} from "next/app";

import {
  Box,
  ChakraProvider,
  Container,
  Hide,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

import theme from "../theme";

import "../globals.css";

function App({Component, pageProps}: AppProps) {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <>
      <Head>
        <title>Communcy</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Start meta tags */}
        <meta content="Communcy" name="title" />
        <meta content="goncy" name="author" />
        <meta content="Gonzalo Pozzo" name="copyright" />
        <meta
          content="Communcy es un portal de descubrimiento sobre gente de la comunidad, con información y tips para gente que está en la búsqueda laboral o perfiles para empresas que buscan nuevos candidatos"
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
              <IconButton
                aria-label="color mode toggle"
                icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
                variant="ghost"
                onClick={toggleColorMode}
              />
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
              _dark={{color: "primary.300"}}
              color="primary.500"
              maxWidth="container.md"
              opacity={0.75}
            >
              <Stack alignItems="center" direction="row" justifyContent="space-between">
                <Text>Read less, do more.</Text>
                <Text>Quilmes: 2022</Text>
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
