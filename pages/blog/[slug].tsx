import React, { FC } from "react"
import Head from "next/head";
import { getSinglePost } from "../api/posts";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import Link from "next/link";
import { getPostInfoList } from "../api/posts";
import { Stack, Flex, Heading, Box, Text, useColorMode } from "@chakra-ui/react";
import PostLink from "../../components/PostLink";

type PostProps = {
  htmlString: string,
  data: {
    [key: string]: any
  },
  ghostPost: GhostPost;
}

type GhostPost = {
  id: string;
  title: string;
  html: string;
  slug: string;
}

const Post:FC<PostProps> = ({ ghostPost }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      {/* <Head>
        <title>{ghostPost.title}</title>
      </Head> */}
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
            {ghostPost.title}
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
          <div dangerouslySetInnerHTML={{ __html: ghostPost.html }} />
        </Flex>
      </Stack>
    </Container>
    // <Container>
    //   <Head>
    //     <title>{ghostPost.title}</title>
    //     {/* <meta title="description" content={ghostPost.metaDescription} /> */}
    //   </Head>
    //   <h1>{ghostPost.title}</h1>
    //   <div dangerouslySetInnerHTML={{ __html: ghostPost.html }} />
    // </Container>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const ghostPost = await getSinglePost(slug);

  return {
    props: {
      ghostPost: ghostPost,
    }
  };
}

export default Post;