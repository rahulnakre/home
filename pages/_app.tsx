import '../styles/globals.css'
import { ChakraProvider, useColorMode, CSSReset, ColorModeProvider } from "@chakra-ui/react"
import { Global, css } from '@emotion/react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from 'components/MDXComponents';


const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {/* <CSSReset /> */}
      <Global
        styles={css`
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
        </Head>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp
