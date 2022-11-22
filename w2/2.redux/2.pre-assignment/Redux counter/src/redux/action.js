import {INC,DEC} from "./actionTypes.js"

export const increament =(value)=>({type:INC,value:value})
export const decreament =(value)=>({type:DEC,value:value})