import React, { FC } from "react";
import Link from "next/link";
import Container from "../../components/Container";
import { Stack, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import PostLink from "../../components/PostLink";
import { GetStaticProps } from "next";
import fs from 'fs';
import matter from "gray-matter";
import path from "path";

export type PostInfo = {
  title: string;
  slug: string;
  description?: string;
}

type LogProps = {
  posts: PostInfo[],
}

const Log:FC<LogProps> = (props) => {
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
        justifyContent="flex-start"
        alignItems="flex-start"
        margin="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          width="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Logs
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Thought dump, easier to get some ideas out 
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          width="100%"
          marginTop={8}
        >
          {props.posts.map(post => {
            return (
              <Link 
                href={"/log/" + post.slug} 
                key={post.slug}
              >
                <div>
                  <PostLink title={post.title} excerpt={post?.description} />
                </div>
              </Link>
            );
          })} 
        </Flex>
      </Stack>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync("data/log");
  const posts: PostInfo[] = files.map(filename => {
    
    const mdWithMetadata: string = fs.readFileSync(
      path.join('data/log/', filename)
    ).toString();
    const parsedMd: matter.GrayMatterFile<string> = matter(mdWithMetadata);
    return {
      title: parsedMd.data.title,
      slug: parsedMd.data.slug,
      description: parsedMd.data.description,
    }
  });

  return {
    props: {
      posts: posts
    }
  }
}

export default Log;
