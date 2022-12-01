import React, { useEffect, useState } from "react";

function Page({ todos }) {
  return (
    <div>
      <h1>Todo</h1>
      <div>
        {todos.map((el) => {
          return <h1 key={el.id}>{el.value}</h1>;
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:8080/todos");
  let data = await response.json();
  return {
    props: {
      todos: data,
    }, // will be passed to the page component as props
  };
}

export default Page;
