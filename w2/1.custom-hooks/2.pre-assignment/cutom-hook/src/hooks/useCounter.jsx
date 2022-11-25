import { useState } from "react"

const useCounter=(initialValue)=>{
    
    const [count,setCount]=useState(initialValue)

    const increament= (value)=>{
        setCount(value)
    }
    const decreament= (value)=>{
        setCount(value)
    }

    return {count,increament,decreament}

}

export default useCounter;