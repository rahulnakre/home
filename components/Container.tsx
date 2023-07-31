import React from 'react';
import Link from 'next/link';
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/react';
import Footer from './Footer';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"


const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)'
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as={"nav" as any}
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={
            colorMode === 'dark' ? 
              <FontAwesomeIcon icon={faSun} /> 
              : <FontAwesomeIcon icon={faMoon} />
            }
          onClick={toggleColorMode}
        />
        <Box>
          <Link href="/" passHref>
            <Button variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </Link>
          <Link href="/blog" passHref>
            <Button variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </Link>
          <Link href="/log" passHref>
            <Button variant="ghost" p={[1, 4]}>
              Journal
            </Button>
          </Link>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;