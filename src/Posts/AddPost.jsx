import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serviceAddPost, serviceUpdatePost } from "../services/ServicePost";
import axios from "axios";

const AddPost = ()=>{
    const {postId} = useParams()
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [data , setData] = useState({
        userId:"",
        id:"",
        title:"",
        body:"",
    })
    const handelAddPost = (e)=>{
        e.preventDefault();
        if(!postId){
            serviceAddPost(data);
        }else{
            serviceUpdatePost(data, postId);
        }
    
    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            setUser(res.data)
        }).catch(err=>{
            console.log(err);
        })
        if(postId){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res=>{
                setData(res.data)
            })
        }
    },[])
    return(
            <div id="content" className="container">
                <h3><span className={postId ? "badge badge-warning" : "badge badge-primary"}>{postId ? "ویرایش پست:" : "افزودن پست :"}</span></h3>
                <div className="shadow p-3 mb-5 bg-body rounded">
                    <form onSubmit={handelAddPost} className="form-group">
                        <div className="form-group">
                            <label className="form-label"> کاربران</label>
                            <select class="form-control border" value={data.userId} onChange={(e)=>({...data,userId:e.target.value})}>
                                <option selected>کاربر مورد نظر را انتخاب کنید...</option>
                                {user.map(u => (
                                    <option key={u.id} value={u.id}>{u.name}</option>
                                ))}
                                
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">شناسه کاربر</label>
                            <input type="number" className="form-control mr-sm-2 border" placeholder="شناسه کاربر"  value={data.userId} onChange={(e)=>setData({...data, userId:e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">عنوان</label>
                            <input type="text" className="form-control mr-sm-2 border" placeholder="عنوان" value={data.title} onChange={(e)=>setData({...data, title:e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">توضیحات</label>
                            <textarea type="text" className="form-control mr-sm-2 border" placeholder="توضیحات..." value={data.body} onChange={(e)=>setData({...data, body:e.target.value})}></textarea>
                        </div>


                        <div className="form-group text-left p-3 mt-5">
                            <button className="btn btn-danger ml-1" onClick={()=>{navigate("/post")}}>بازگشت</button>
                            <button type="submit" className={postId ? "btn btn-warning": "btn btn-primary"}>{postId ? "ویرایش" : "ثبت"}</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}
export default AddPost;