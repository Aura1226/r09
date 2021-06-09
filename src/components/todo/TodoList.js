import { useDispatch, useSelector } from "react-redux";
import PageList from "./PageList";
import { readTodo } from "./todoSlice";


const TodoList = () => {

    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const readFn = (tno) => {
        dispatch(readTodo(tno))
    }

    const list = todos.dtoList.map(t => <li key={t.tno} onClick={() => readFn(t.tno) } >{t.tno} -- {t.title} </li>)


    return ( <div>
        {list}
        <PageList {...todos}></PageList>
    </div> );
}
 
export default TodoList;