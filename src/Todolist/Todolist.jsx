import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const init = 0
const reducer = (state,action)=>{
    switch (action) {
        case 'add':
            return state + 1;
        case 'negative':
            return state - 1;
        case 'reset':
            return init;
        default:
            return state;
    }
}

const Todolist = ()=>{
    const [plus , addPlus] = useReducer(reducer , init)
    const [todo, setTodo] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
            console.log(res);
            setTodo(res.data)
        })
    })
    return(
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">لیست کارها</h2>
            <div className=" container text-center my-3">
                <p className="display-4">{plus}</p>
                <button className="btn btn-success" onClick={()=>addPlus('add')}>افزایش</button>
                <button className="btn btn-danger m-3" onClick={()=>addPlus('negative')}>کاهش</button>
                <button className="btn btn-warning" onClick={()=>addPlus('reset')}>ریست</button>
            </div>
            {todo.length ? (
                            <div className="container justify-content-between">
                            
                                 <div>
                                    <table class="table">
                                            <thead>
                                                <tr className=" ">
                                                <th scope="col">شماره</th>
                                                <th scope="col">عنوان</th>
                                                <th scope="col">انجام شده</th>
                                                <th scope="col">انجام نشده</th>
                                                </tr>
                                            </thead>
                                            {todo.slice(0,50).map(u=>(
                                            <tbody>
                                                <tr className={u.completed ? "table-success": "table-danger"}>
                                                <th scope="row">{u.id}</th>
                                                <td>{u.title}</td>
                                                <td><span className={u.completed ? "fa fa-check text-success":""}></span></td>
                                                <td><span className={u.completed ? "":"fa fa-close text-danger"}></span></td>
                                                </tr>
                                            </tbody>
                                            ))}
                                        </table>
                                </div>
                             
                            </div>
            ):(
                <>
                <h1 className="display-4 text-info">لطفا منتظر بمانید...</h1>
                </>
            )}

        </div>
    )
}
export default Todolist;