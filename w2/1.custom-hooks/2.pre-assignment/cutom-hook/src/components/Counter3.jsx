import React from 'react'
import { useState } from 'react'
import useCounter from '../hooks/useCounter'


export default function Counter3() {

    const {count,increament,decreament} =useCounter(1)
    const [num,setNum] =useState("")

  return (
    <div>

<h1>Count : {count}</h1>
<input type="number" placeholder='Enter only number' value={num} onChange={(e)=>setNum(e.target.value)} />
<br />
<button onClick={()=>increament(count- num)}>Decreament By Value</button>
<br />
<button onClick={()=>decreament(count+5)}>+ 5</button>

    </div>
  )
}
