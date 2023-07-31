import { FC } from 'react';
import Container from '../components/Container';
import { useColorMode, Heading, Text, Flex, Stack, ListItem, UnorderedList, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

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
            I’m a <Text as="mark">Software Engineer</Text> at <Text as="mark">AWS</Text> in Toronto, where I work on auth and get
            to do many fun things. On the side, I like to write 
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
            Creative Writing
          </Heading>
          <br />
          <Text color={secondaryTextColor[colorMode]} variant='main'>
          A lil' collection of places I write in. It's been very soothing to write more, giving me a way to distill 
          my thoughts into something more coherent. My next steps are to get better at world building and to write a short
          story sometime in 2023.
          </Text>
          <br />
          <UnorderedList>
            <ListItem>
              <Link href='https://rahulnakre.substack.com' isExternal>
                Substack <ExternalLinkIcon mx='2px' />
              </Link>
              </ListItem>
            <ListItem>
              <Link href='https://www.openscreenplay.com/profile/rahul_n' isExternal>
                OpenScreenplay Profile <ExternalLinkIcon mx='2px' />
              </Link>
            </ListItem>
          </UnorderedList>
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
          Earlier this year I spent a couple months learning pottery! Working with my hands fely very calming.
          <br />
          I've been less commital about this one but I've been fascinated with movie poster designs recently and 
          I'm using it as an excuse to get better at Illustrator.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}

export default Home;
