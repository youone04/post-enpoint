import { configureStore } from "@reduxjs/toolkit";
import { reducerGetDataPosts } from "../Reducers/reducerGetDataPosts.js";

export const store = configureStore({
    reducer : {
        dataPost: reducerGetDataPosts
    }
})