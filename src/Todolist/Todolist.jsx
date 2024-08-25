import { useEffect, useReducer, useState } from "react";
import axios from "axios";


const init = {
    value1 : 0,
    value2 : 5
}
const reducer = (state,action)=>{
    switch (action.type) {
        case 'add1':
            return {...state , value1: state.value1 + action.val}
        case 'negative1':
            return {...state , value1: state.value1 - action.val}
        case 'add2':
            return {...state , value2: state.value2 + action.val}
        case 'negative2':
            return {...state , value2: state.value2 - action.val}
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
                <p className="display-4">{plus.value1}</p>
                
                <div className="text-center my-3">
                    <button className="btn btn-success" onClick={()=>addPlus({type:'add1' , val : 1 })}>افزایش</button>
                    <button className="btn btn-danger m-3" onClick={()=>addPlus({type:'negative1' , val : 3 })}>کاهش</button>
                </div>
                <p className="display-4">{plus.value2}</p>
                <div className="text-center my-3">
                    <button className="btn btn-success" onClick={()=>addPlus({type:'add2' , val :5 })}>افزایش</button>
                    <button className="btn btn-danger m-3" onClick={()=>addPlus({type:'negative2' , val : 3 })}>کاهش</button>
                </div>

                <button className="btn btn-warning" onClick={()=>addPlus({type:'reset'})}>ریست</button>
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