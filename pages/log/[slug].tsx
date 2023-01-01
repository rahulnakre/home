import React, { FC } from "react"
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import { Stack, Flex, Heading } from "@chakra-ui/react";
import fs from 'fs';
import path from 'path';
import { GetStaticPaths } from "next";
import matter from "gray-matter";
import MDXComponents from "components/MDXComponents";
import remarkSlug from "remark-slug";
import remarkCodeTitles from "remark-code-titles";
import remarkAutolinkHeadings from "remark-autolink-headings";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

type LogProps = {
  title: string;
  description: string;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>
}

const Post:FC<LogProps> = ({ title, description, mdxSource }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta title="description" content={description} />
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
            {title}
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
          <div>
            <MDXRemote {...mdxSource} components={MDXComponents} />
          </div>
        </Flex>
      </Stack>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files: string[] = fs.readdirSync('data/log/')
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".mdx", ""),
    }
  }));

  return {
    paths: paths, 
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const mdxWithMetadata: string = fs.readFileSync(
    path.join('data/log/', slug + ".mdx")
  ).toString();
  const parsedMdx: matter.GrayMatterFile<string> = matter(mdxWithMetadata);

  const mdxSource = await serialize(mdxWithMetadata, { 
    parseFrontmatter: true,
    mdxOptions: { 
      development: false,
      remarkPlugins: [
        remarkSlug,
        remarkCodeTitles,
        remarkAutolinkHeadings
      ]
    },
  })

  return {
    props: {
      title: parsedMdx.data.title,
      description: parsedMdx.data.description,
      mdxSource: mdxSource
    }
  }
}

export default Post;