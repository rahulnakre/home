import React, { FC } from "react";
import fs from "fs";
import Link from "next/link";
import { getPosts, getSinglePost } from "../api/posts";
import { getHeapCodeStatistics } from "v8";

type GhostPost = {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  readingTime: string;
}

type BlogProps = {
  postTitles: string[],
  ghostPosts: GhostPost[];
}

const Blog:FC<BlogProps> = ({ postTitles, ghostPosts }) => {
  return (
    <>
    <h1>heres blog</h1>
    {/* {postTitles.map(postTitle => {
      return (
        <div key={postTitle}>
          <Link  href={"/blog/" + postTitle}>
            <a>{postTitle}</a>
          </Link>
        </div>
      );
    })} */}
    {ghostPosts.map(ghostPost => {
      return (
        <div key={ghostPost.id}>
          <Link  href="/blog/[slug]" as={`/blog/${ghostPost.title}`}>
            <a>{ghostPost.title}</a>
          </Link>
        </div>
      );
    })}
    </>
  );
}

export const getStaticProps = async () => {
  const files: string[] = fs.readdirSync("posts");
  const ghostPosts: GhostPost[] = await getPosts();

  console.log(ghostPosts[0])

  return {
    props: {
      postTitles: files.map(fileName => fileName.replace(".md", "")),
      ghostPosts: ghostPosts
    }
  }
}

export default Blog;