import { configureStore } from "@reduxjs/toolkit";
import todolistTodolist from "./reducer/reducer";

export const store:any = configureStore({
    reducer: {
        todo: todolistTodolist
    }
})