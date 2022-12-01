import { useRouter } from "next/router";
import React from "react";

function Page({ movies }) {
  const router = useRouter();

  return (
    <div>
      <h1>Page : {router.query.id}</h1>
      <h3>{movies.Title}</h3>
      <p>{movies.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:8081/movies`);
  let data = await response.json();
  //   let { movies } = data;
  return {
    paths: data.map((movie) => ({ params: { id: movie.id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const response = await fetch(`http://localhost:8081/movies/${id}`);
  let data = await response.json();
  return {
    props: {
      movies: data,
    },
  };
}

export default Page;
