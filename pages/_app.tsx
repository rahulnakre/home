import '../styles/globals.css'
import { ChakraProvider, useColorMode, extendTheme } from "@chakra-ui/react"
import { Global, css } from '@emotion/react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from 'components/MDXComponents';


const theme = extendTheme({
  components: {
    Text: {
      variants: {
        'main': {
          fontSize: '21px'
        }
      }
    }
  }
})

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #aec6cf;
            color: ${colorMode === 'light' ? 'white' : '#171923'};
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
    <ChakraProvider theme={theme}>
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
