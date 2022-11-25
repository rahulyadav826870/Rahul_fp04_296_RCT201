import React from 'react'
import useCounter from '../hooks/useCounter'

export default function Counter2() {

    const {count,increament,decreament} =useCounter(1)
   
  return (
    <div>
<h1>Count : {count}</h1>
<button onClick={()=>increament(count-1)}>- 3</button>
<button onClick={()=>decreament(count+1)}>+ 2</button>

    </div>
  )
}
