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
          <Text color={secondaryTextColor[colorMode]}>
            I’m a <Text as="mark">Software Developer</Text> currently doing a work term at Honeybee Hub, a startup focused on 
            empowering researchers and participants. My main technical interests include
            backends for web services, software infrastructure, and building products.<br />
            <Text as="mark">CS @ UofT</Text>.
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
          I'm currently learning more about infrastructure, webassembly, trying to train GANs, and working on Huby 
        </Flex>
      </Stack>
    </Container>
  );
}

export default Home;