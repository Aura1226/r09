import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchPage = createAsyncThunk("todo/fetchPage", async(page) => {

    console.log("fetchPage", page)

    if(page === 0){
        return null
    }

    const res = await axios.get("http://localhost:8080/todo/pages?page="+page)
    return res.data

} )

export const addTodo = createAsyncThunk("todo/addTodo", async(todo) => {
    const res = await axios.post("http://localhost:8080/todo", todo)
    return res.data
})

export const readTodo = createAsyncThunk("todo/read", async(tno) => {
    const res = await axios.get("http://localhost:8080/todo/"+tno)
    return res.data
})

export const deleteTodo = createAsyncThunk("todo/delete", async(todo) => {
    const res = await axios.delete("http://localhost:8080/todo/" + todo.tno, {date:{...todo}})
    return res.data
})

const todoSlice = createSlice({
    name:"todo",
    initialState: {
        dtoList:[],
        page:1,
        pageList:[],
        prev:false,
        next:false,
        start:0,
        end:0
    },
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: {
        [fetchPage.fulfilled]: (state,action) => {
            console.log("fetchPage.fulfilled", action)
            
            if(action.payload === null){
                state.page = 1
                return state
            }

            return action.payload
        },
        [addTodo.fulfilled]: (state,action) => {
            console.log("addTodo.fulfilled", action)
            state.page = 0
        },
        [readTodo.fulfilled]: (state, action) => {
            console.log("readTodo.fulfilled", action)
            state.current = action.payload
        },
        [deleteTodo.fulfilled]: (state, action) => {
            console.log("deleteTodo.fulfilled", action)
            state.page = 0
        }
    }

})

export const {changePage} = todoSlice.actions

export default todoSlice.reducer