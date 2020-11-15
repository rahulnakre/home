import React, { FC } from "react";
import fs from "fs";
import Link from "next/link";

type BlogProps = {
  postTitles: string[]
}

const Blog:FC<BlogProps> = ({ postTitles }) => {
  return (
    <>
    <h1>heres blog</h1>
    {/* {postTitles} */}
      {postTitles.map(postTitle => {
        return (
          <div key={postTitle}>
            <Link  href={"/blog/" + postTitle}>
              <a>{postTitle}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export const getStaticProps = async () => {
  const files: string[] = fs.readdirSync("posts");
  const f = files.map(fileName => fileName.replace(".md", ""))
  console.log(f)
  return {
    props: {
      postTitles: files.map(fileName => fileName.replace(".md", ""))
    }
  }
}

export default Blog;