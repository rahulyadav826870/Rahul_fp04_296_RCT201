

import { legacy_createStore } from "redux";

import { reducerFun } from "./reducer.js";

export const store= legacy_createStore(reducerFun)