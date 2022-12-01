import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function Page({ todo = [] }) {
  console.log(todo);
  const router = useRouter();

  const handleClick = (id) => {
    console.log("visiting page", id);
    router.push(`${id}`);
    // console.log()
  };
  return (
    <>
      <Head>
        <title>todo Page</title>
        <meta title="description" content="todo, react,jsk,typescripts"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {todo.map((todo) => (
          <div key={todo.id}>
            <img src={todo.Poster} alt={todo.Title} />
            <h1 onClick={() => handleClick(todo.id)}>{todo.Title}</h1>
          </div>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:8080/todo");
  let data = await response.json();
  return {
    props: {
      todo: data,
    }, // will be passed to the page component as props
  };
}

export default Page;
