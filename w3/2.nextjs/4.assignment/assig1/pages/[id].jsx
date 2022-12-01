import { useRouter } from "next/router";
import React from "react";

function Page({ todo }) {
  const router = useRouter();

  return (
    <div>
      <h1>Page : {router.query.id}</h1>
      <h3>{todo.Title}</h3>
      <img src={todo.Poster} alt={todo.Title} />
      {/* <p>{todo.description}</p> */}
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:8080/todo`);
  let data = await response.json();
  //   let { todo } = data;
  return {
    paths: data.map((todo) => ({ params: { id: todo.id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const response = await fetch(`http://localhost:8080/todo/${id}`);
  let data = await response.json();
  return {
    props: {
      todo: data,
    },
  };
}

export default Page;
