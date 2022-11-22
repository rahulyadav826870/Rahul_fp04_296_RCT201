
import { INC,DEC } from "./actionTypes.js"

const initial={
    count:0
}

export const reducerFun=(state=initial,action)=>{

    switch(action.type){
        
        case INC:
            return {
            ...state,
            count: state.count+action.value
        }

        case DEC:
            return {
            ...state,
            count: state.count-action.value
        }
        
        default:{
            return state
        }
    }
}