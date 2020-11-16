import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import { FC } from 'react';
import Container from '../components/Container';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';


type HomeProps = {
}

const Home:FC<HomeProps> = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      {/* <Header title={"☕ Rahul's Corner"}/> */}
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hey, I’m Rahul Nakre
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I’m a developer currently working a Honeybee Hub. My interests area 
            backends for web services, infrastructure, and building products.
            Currently studying CS @ UofT.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Recent Posts
          </Heading>
          {/* Blog Posts Go here */}
        </Flex>
      </Stack>
    </Container>
  );
}

export default Home;