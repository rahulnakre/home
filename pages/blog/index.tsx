import React, { FC } from "react";
import Link from "next/link";
import Container from "../../components/Container";
import { Stack, Flex, Heading, Box, Text, useColorMode } from "@chakra-ui/react";
import PostLink from "../../components/PostLink";
import { GetStaticProps } from "next";
import fs from 'fs';
import matter from "gray-matter";
import marked from "marked";
import path from "path";

export type PostInfo = {
  // id: string;
  title: string;
  slug: string;
  description?: string;
  // publishedAt: string;
  // readingTime: string;
  // custom_excerpt: string;
}

type BlogProps = {
  posts: PostInfo[],
  // ghostPostInfoList: GhostPostInfo[];
}

const Blog:FC<BlogProps> = (props) => {
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
          {props.posts.map(post => {
            return (
              <Link href={"/blog/" + post.slug} key={post.slug}>
                <div>
                  <PostLink title={post.title} excerpt={post?.description} />
                </div>
              </Link>
            );
          })} 
          {/* {ghostPostInfoList.map(postInfo => {
            return (
              <Link href={"/blog/" + postInfo.slug} key={postInfo.id}>
                <div>
                  <PostLink title={postInfo.title} excerpt={postInfo.custom_excerpt} />
                </div>
              </Link>
            );
          })} */}
        </Flex>
      </Stack>
    </Container>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync("data/blog");
  // NOTE: for now slugs are titles are the same
  const titles = files.map(filename => filename.replace(".md", ""));
  // const slugs = files.map(filename => filename.replace(".md", ""));
 
  console.log(files)

  // const posts: PostInfo[] = files.map(filename => ({
  //   title: filename.replace(".md", ""),
  //   slug: filename.replace(".md", ""),
  // }));

  // console.log(posts)


  // const mdWithMetadata: string = fs.readFileSync(
  //   path.join('data/blog/', slug + ".md")
  // ).toString();
  // const parsedMd: matter.GrayMatterFile<string> = matter(mdWithMetadata);
  // const htmlString: string = marked(parsedMd.content)

  const posts: PostInfo[] = files.map(filename => {
    const mdWithMetadata: string = fs.readFileSync(
      path.join('data/blog/', filename)
    ).toString();
    const parsedMd: matter.GrayMatterFile<string> = matter(mdWithMetadata);
    // title: filename.replace(".md", ""),
    // slug: filename.replace(".md", ""),

    return {
      title: parsedMd.data.title,
      slug: parsedMd.data.slug,
      description: parsedMd.data.description,
    }
  });

  // return {
  //   props: {
  //     htmlString: htmlString,
  //     data: parsedMd.data,
  //   }
  // }

  return {
    props: {
      posts: posts
    }
  }
}

export default Blog;
