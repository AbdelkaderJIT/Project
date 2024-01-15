import { authReducer } from "./authReducer";
import {createStore,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
export const store =createStore(authReducer,applyMiddleware(thunk))