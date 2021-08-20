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
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        margin="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hey, I'm Rahul Nakre 👋🏾
          </Heading>
          <br />
          <Text color={secondaryTextColor[colorMode]}>
            I’m a <Text as="mark">Software Engineer</Text>, most recently at <Text as="mark">AWS</Text>,
            where I got to fully design an implement a self-service policy management tool using AWS. <br /><br />
            Previously, I spent a year doing fullstack work at <Text as="mark">Honeybee Hub</Text>, a startup focused on 
            empowering researchers and participants, where I worked on mobile, frontend portals, and payments.<br /><br />
            My main technical interests include backends for web services, distributed systems, and building products.<br /><br />
            <Text as="mark">CS @ University of Toronto</Text>.
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
            Interests
          </Heading>
          I'm currently learning Rust, various topics in distributed systems, and webassembly. Also trying to get better at 
          piano :).
        </Flex>
      </Stack>
    </Container>
  );
}

export default Home;