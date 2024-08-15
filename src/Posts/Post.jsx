import axios from "axios";
import { useEffect, useState } from "react";

const Post = ()=>{
    const [data , setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{

            setData(res.data)
        }).catch(err=>{
            console.log(err);
        })
    })


    return(
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">پست</h2> 
            {data.length ? (
                            
                <div className="container">
                    {data.map(u=>(
                        <div>
                        <h1 className="text-center badge badge-info">{u.title}</h1>
                        <p className="justify-content-center">{u.body}</p>
                        <div className="d-flex justify-content-end">
                            <div className="m-1">
                                <span className="fa fa-user-circle-o"></span>
                                <p className="badge badge-light pl-2">{u.title}</p>
                            </div>
                            <div className="m-1">
                                <span className="fa fa-comment"></span>
                                <p className="badge badge-light pl-2">{u.id}</p>
                            </div>
                            <div className="m-1">
                                <span className="fa fa-heart"></span>
                                <p className="badge badge-light pl-2">{u.userId}</p>
                            </div>
                                    
                        </div>
                        <hr/>
                        </div>
                    ))}
                </div>
            ):(
                <>
                <h1 className="display-4 text-info">لطفا منتظر بمانید...</h1>
                </>
            )}       

            
        </div>

    )
}
export default Post;