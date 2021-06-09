import { useDispatch } from "react-redux";
import { changePage } from "./todoSlice";


const PageList = ({pageList,prev,next,start,end,page}) => {

    const dispatch = useDispatch()
    const buttons = pageList.map(num => <button key={num} onClick={() => movePage(num)} >{num}</button>)

    const movePage = (pageNum) => {
        dispatch(changePage(pageNum))
    }

    return ( 
        <div>
            {prev ? <button onClick={() => movePage(start -1)} >PREV</button>: <></>}
            {buttons}
            {next ? <button onClick={() => movePage(end + 1)}>NEXT</button>: <></>}
        </div>
     );
}
 
export default PageList;