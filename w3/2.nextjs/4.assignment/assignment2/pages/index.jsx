import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function Page({ blogs = [] }) {
  console.log(blogs);
  const router = useRouter();

  const handleClick = (id) => {
    console.log("visiting page", id);
    router.push(`${id}`);
    // console.log()
  };
  return (
    <>
      <Head>
        <title>Blogs Page</title>
        <meta title="description" content="blogs, react,jsk,typescripts"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h1 onClick={() => handleClick(blog.id)}>{blog.title}</h1>
          </div>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:8082/blogs");
  let data = await response.json();
  return {
    props: {
      blogs: data,
    }, // will be passed to the page component as props
  };
}

export default Page;
