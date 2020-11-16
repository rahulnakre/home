import React, { FC } from "react";
import fs from "fs";
import Link from "next/link";
import { getPosts } from "../api/posts";

type GhostPost = {
  title: string;
  content: string;
}

type BlogProps = {
  postTitles: string[],
  ghostPostTitles: any;
}

const Blog:FC<BlogProps> = ({ postTitles, ghostPostTitles }) => {
  return (
    <>
    <h1>heres blog</h1>
    {postTitles.map(postTitle => {
      return (
        <div key={postTitle}>
          <Link  href={"/blog/" + postTitle}>
            <a>{postTitle}</a>
          </Link>
        </div>
      );
    })}
    {ghostPostTitles.map(title => {
      return (
        <div key={title}>
          <Link  href={"/blog/" + title}>
            <a>{title}</a>
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

  const ghostPostTitles = ghostPosts.map((ghostPost) => ghostPost.title);

  console.log(ghostPostTitles)

  return {
    props: {
      postTitles: files.map(fileName => fileName.replace(".md", "")),
      ghostPostTitles: ghostPostTitles 
    }
  }
}

export default Blog;