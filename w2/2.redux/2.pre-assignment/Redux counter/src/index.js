
import { store } from "./redux/store.js";
import {decreament, increament} from "./redux/action.js"


console.log(store.getState())

// store.dispatch(increament(1))
// store.dispatch(increament(2))
store.dispatch(increament(3))
store.dispatch(decreament(1))


console.log(store.getState())



