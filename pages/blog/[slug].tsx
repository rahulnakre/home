import React, { FC } from "react"
import fs from "fs"; // a node lib, but its fine
import path from "path";
import matter from "gray-matter"; // to extract metadata from .md
import Head from "next/head";
import marked from "marked";

type PostProps = {
  htmlString: string,
  data: {
    [key: string]: any
  }
}

const Post:FC<PostProps> = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div>
        contents below
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
}

export const getStaticPaths = async () => {
  const files: string[] = fs.readdirSync('posts')
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));

  return {
    paths: paths,
    // build everything at build time
    fallback: false,
  };
}

// Fetches the content of the post
// anything in the props obj gets sent as props to our component
// param we need to fetch data for gets sent to this function
export const getStaticProps = async ({ params: { slug } }) => {
  const mdWithMetadata: string = fs.readFileSync(
    path.join('posts', slug + ".md")
  ).toString();
  const parsedMd: matter.GrayMatterFile<string> = matter(mdWithMetadata);
  const htmlString: string = marked(parsedMd.content);

  return {
    props: {
      // contents: parsedMd.content,
      htmlString,
      data: parsedMd.data,
    }
  };
}

export default Post;