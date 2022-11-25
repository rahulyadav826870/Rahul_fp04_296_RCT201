import React from 'react'
import useCounter from '../hooks/useCounter'

export default function Counter1() {

     const {count,increament,decreament} =useCounter(1)
  return (
    <div>
<h1>Count : {count}</h1>
<button onClick={()=>increament(count-10)}>- 10</button>
<button onClick={()=>decreament(count+10)}>+ 10</button>

    </div>
  )
}
