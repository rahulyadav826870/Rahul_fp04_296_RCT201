import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <button onClick={() => setCount(count - 1)}>DEC </button>
    </div>
  );
}

export default Counter;
