import React, { FC } from "react"
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import { Stack, Flex, Heading } from "@chakra-ui/react";
import fs from 'fs';
import path from 'path';
import { GetStaticPaths } from "next";
import matter from "gray-matter";
import marked from "marked";

type PostProps = {
  htmlString: any;
  data: any;
}

const Post:FC<PostProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <Head>
        <title>{props.data.title}</title>
        <meta title="description" content={props.data.description} />
      </Head>
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
            {props.data.title}
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
          <div 
            style={{
              color: "white"
            }}
            dangerouslySetInnerHTML={{ __html: props.htmlString }} 
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files: string[] = fs.readdirSync('data/blog')
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", ""),
    }
  }));

  return {
    paths: paths, 
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const mdWithMetadata: string = fs.readFileSync(
    path.join('data/blog/', slug + ".md")
  ).toString();
  const parsedMd: matter.GrayMatterFile<string> = matter(mdWithMetadata);
  const htmlString: string = marked(parsedMd.content)

  return {
    props: {
      htmlString: htmlString,
      data: parsedMd.data,
    }
  }
}

export default Post;