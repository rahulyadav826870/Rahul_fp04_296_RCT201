import { useRouter } from "next/router";
import React from "react";

function Page({ blog }) {
  const router = useRouter();
  return (
    <div>
      <h1>Page : {router.query.id}</h1>
      <h1>In this blog we see the {blog.title} information.</h1>
      <h2>Blogger Name Is {blog.name}</h2>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:8082/blogs`);
  let data = await response.json();
  return {
    paths: data.map((blog) => ({ params: { id: blog.id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const response = await fetch(`http://localhost:8082/blogs/${id}`);
  let data = await response.json();
  return {
    props: {
      blog: data,
    },
  };
}
export default Page;
