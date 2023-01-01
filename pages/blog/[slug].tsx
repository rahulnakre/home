import React, { FC } from "react"
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import { Stack, Flex, Heading } from "@chakra-ui/react";
import fs from 'fs';
import path from 'path';
import { GetStaticPaths } from "next";
import matter from "gray-matter";
import { marked } from "marked";
// import renderToString from 'next-mdx-remote/render-to-string';
import MDXComponents from "components/MDXComponents";
// import hydrate from 'next-mdx-remote/hydrate';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
// import "remark-autolink-headings";
// import "remark-slug";
import { compile } from '@mdx-js/mdx'
// import remark-autolink-headings from "remark-autolink-headings";
// import('remark-slug'),
// import('remark-code-titles')
import remarkSlug from "remark-slug";
import remarkCodeTitles from "remark-code-titles";
import remarkAutolinkHeadings from "remark-autolink-headings";

type PostProps = {
  // htmlString: any;
  // data: any;
  title: string;
  description: string;
  // post: any;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>
}

const Post:FC<PostProps> = ({ title, description, mdxSource }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  // const content = hydrate(props.post, {
  //   components: MDXComponents
  // });
  
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
            {/* {content} */}
            {/* <MDXRemote {...mdxSource} components={MDXComponents} /> */}
            <MDXRemote {...mdxSource} /> 
            {/* d */}
          </div>
        </Flex>
      </Stack>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files: string[] = fs.readdirSync('data/blog')
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
    path.join('data/blog/', slug + ".mdx")
  ).toString();
  const parsedMdx: matter.GrayMatterFile<string> = matter(mdxWithMetadata);

  // const htmlString: string = marked(parsedMdx.content)
  
  // const mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>> = await serialize(
  //   parsedMdx.content, 
  //   {
  //     // components: MDXComponents,
  //     mdxOptions: {
  //       remarkPlugins: [
  //         await compile
  //         // import("remark-autolink-headings"),
  //         // import('remark-slug'),
  //         // import('remark-code-titles')
  //       ],
  //     },
  //     parseFrontmatter: true
  //   }
  // );

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
      // htmlString: htmlString,
      // data: parsedMdx.data,
      title: parsedMdx.data.title,
      description: parsedMdx.data.description,
      mdxSource: mdxSource
    }
  }
}

export default Post;