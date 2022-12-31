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
          <Heading>
            Hey, I'm Rahul Nakre 👋🏾
          </Heading>
          <br />
          <Text color={secondaryTextColor[colorMode]} variant='main'>
            I’m a <Text as="mark">Software Engineer</Text> at <Text as="mark">AWS Identity</Text>, where I work on auth and get
            to do many fun things.
          </Text>
          <br />
          <Text color={secondaryTextColor[colorMode]} variant='main'>
            Previously, I spent a year doing fullstack work at <Text as="mark">Honeybee Hub</Text>, a startup focused on 
            empowering researchers and participants. I worked on mobile, frontend portals, backend logic, devops, and payments. Working at 
            a startup was a great experience and I miss the chaos sometimes.<br />
          </Text>
          <br />
          <Text color={secondaryTextColor[colorMode]} variant='main'>
            More than any specific technical interest, I love seeing a product through from start to finish. If I had to pick one,
            I'd say distributed systems and compilers have been my favorite topics within CS.<br />
          </Text>
          <br />
          <Text as="mark">CS @ University of Toronto</Text>
          <br />
          <Text color={secondaryTextColor[colorMode]} variant='main'>
            Feel free to reach out about whatever 🫣
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading>
            Interests
          </Heading>
          <br />
          <Text color={secondaryTextColor[colorMode]} variant='main'>
          Currently working on my writing and pottery skills. My writing isn't where I want it to be, so I'm going to
          try and fail on here in hopes of getting better :)
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}

export default Home;
