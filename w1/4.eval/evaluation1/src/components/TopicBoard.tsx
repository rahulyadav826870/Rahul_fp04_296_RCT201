import React, { useState } from 'react'
import { Topic } from '../constants'

type initialData={
    id:number,
    type:string,
    message:string,
    like:number

}

export default function TopicBoard({initialData}) {

    const [todos,setTodos] =useState <Topic[]>([])



  return (
    <div>TopicBoard</div>
  )
}
