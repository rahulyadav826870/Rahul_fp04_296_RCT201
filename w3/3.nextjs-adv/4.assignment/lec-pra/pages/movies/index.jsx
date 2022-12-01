import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

function Movies({ movies = [] }) {
  const router = useRouter();

  const handleClick = (id) => {
    console.log("visiting page", id);
    router.push(`${id}`);
    // console.log()
  };
  return (
    <>
      <Head>
        <title>Movies Page</title>
        <meta title="description" content="blogs, react,jsk,typescripts"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {movies.length}

        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={movie.Images[0]}
              alt={movie.Title}
              width="200"
              height="200"
            />
            <h1 onClick={() => handleClick(movie.id)}>{movie.Title}</h1>
          </div>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:8081/movies");
  let data = await response.json();
  return {
    props: {
      movies: data,
    }, // will be passed to the page component as props
  };
}
export default Movies;
