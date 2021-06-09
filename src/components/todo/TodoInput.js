import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";


const TodoInput = () => {

    const dispatch = useDispatch()
    const titleRef = useRef() //동태그 아이디를 사용한다.
    const contentRef = useRef()

    const saveFn = () => {
        const obj = {
            title: titleRef.current.value,
            content: contentRef.current.value
        }

        dispatch(addTodo(obj))

    }

    return ( 
        <div>
            <input type={'text'} ref={titleRef}></input>
            <input type={'text'} ref={contentRef}></input>
            <button onClick={() => saveFn()}>SAVE</button>
        </div>
     );
}
 
export default TodoInput;