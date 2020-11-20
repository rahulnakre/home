import React, { FC } from "react";
import Link from "next/link";
import { getPostInfoList } from "../api/posts";
import Container from "../../components/Container";
import { Stack, Flex, Heading, Box, Text, useColorMode } from "@chakra-ui/react";
import PostLink from "../../components/PostLink";

export type GhostPostInfo = {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  readingTime: string;
  custom_excerpt: string;
}

type BlogProps = {
  postTitles: string[],
  ghostPostInfoList: GhostPostInfo[];
}

const Blog:FC<BlogProps> = ({ ghostPostInfoList }) => {
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
            Blog
          </Heading>

        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          width="100%"
          marginTop={8}
        >
          {ghostPostInfoList.map(postInfo => {
            return (
              <Link href={"/blog/" + postInfo.slug} key={postInfo.id}>
                <div>
                  <PostLink title={postInfo.title} excerpt={postInfo.custom_excerpt} />
                </div>
              </Link>
            );
          })}
        </Flex>
      </Stack>
    </Container>
  );
}

export const getStaticProps = async () => {
  let ghostPostInfoList: GhostPostInfo[] = await getPostInfoList();

  return {
    props: {
      ghostPostInfoList: ghostPostInfoList
    }
  }
}

export default Blog;