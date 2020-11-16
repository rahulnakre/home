import React, { FC } from "react";
import Link from "next/link";
import { getPostInfoList } from "../api/posts";
import Container from "../../components/Container";

export type GhostPostInfo = {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  readingTime: string;
}

type BlogProps = {
  postTitles: string[],
  ghostPostInfoList: GhostPostInfo[];
}

const Blog:FC<BlogProps> = ({ ghostPostInfoList }) => {
  return (
    <Container>
    {ghostPostInfoList.map(postInfo => {
      return (
        <div key={postInfo.id}>
          <Link  href={"/blog/" + postInfo.slug}>
            <a>{postInfo.title}</a>
          </Link>
        </div>
      );
    })}
    </Container>
  );
}

export const getStaticProps = async () => {
  const ghostPostInfoList: GhostPostInfo[] = await getPostInfoList();

  return {
    props: {
      ghostPostInfoList: ghostPostInfoList
    }
  }
}

export default Blog;