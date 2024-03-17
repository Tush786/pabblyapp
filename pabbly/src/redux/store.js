import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { Reducer } from "./reducer"


export const store = configureStore({
    reducer: {
        "user": Reducer,
    },
    middleware: [thunk]
})