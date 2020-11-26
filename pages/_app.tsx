import '../styles/globals.css'
import { ChakraProvider, useColorMode, CSSReset, ColorModeProvider } from "@chakra-ui/react"
import { Global, css } from '@emotion/react';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import Head from 'next/head';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return( 
    <ChakraProvider>
      <GlobalStyle>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            content="width=device-width, initial-scale=1"
            name="viewport"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/static/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <title>Rahul Nakre's Cove</title>
          {/* <meta content="14d2e73487fa6c71" name="yandex-verification" />
          <meta
            content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
            name="google-site-verification"
          /> */}
        </Head>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp
