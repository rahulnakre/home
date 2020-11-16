import React, { FC } from "react"
import Head from "next/head";
import { getSinglePost } from "../api/posts";
import { useRouter } from "next/router";
import Container from "../../components/Container";

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
      <Head>
        <title>{ghostPost.title}</title>
        {/* <meta title="description" content={ghostPost.metaDescription} /> */}
      </Head>
      <h1>{ghostPost.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: ghostPost.html }} />
    </Container>
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