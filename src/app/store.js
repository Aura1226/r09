import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../components/todo/todoSlice";


export default configureStore({
    reducer: {
        todo: todoSlice
    }
})