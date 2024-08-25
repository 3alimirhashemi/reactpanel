import React, { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serviceAddPost, serviceUpdatePost } from "../services/ServicePost";
import axios from "axios";
import { init, reducer } from "../Posts/postReducer";


const AddPost = ()=>{
    const {postId} = useParams()
    const navigate = useNavigate();
    const [data , dispatch] = useReducer(reducer,init);

    const handelAddPost = (e)=>{
        e.preventDefault();
        if(!postId){
            serviceAddPost(data.postData);
        }else{
            serviceUpdatePost(data.postData, postId);
        }
    
    }
    const setInputValues = (e,propName)=>{
        dispatch({
            type : 'setInputValue',
            propName : propName,
            propValue : e.target.value,
        })

    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            dispatch({
                type:'changeUser',
                payload : res.data
            })
        }).catch(err=>{
            console.log(err);
        })
        if(postId){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res=>{
                dispatch({
                    type:'isUpdate',
                    payload : res.data
                })
            })
        }
    })
    return(
            <div id="content" className="container">
                <h3><span className={postId ? "badge badge-warning" : "badge badge-primary"}>{postId ? "ویرایش پست:" : "افزودن پست :"}</span></h3>
                <div className="shadow p-3 mb-5 bg-body rounded">
                    <form onSubmit={handelAddPost} className="form-group">
                        <div className="form-group">
                            <label className="form-label"> کاربران</label>
                            <select class="form-control border" value={data.postData.userId} onChange={(e)=>setInputValues(e , "userId")}>
                                <option selected>کاربر مورد نظر را انتخاب کنید...</option>
                                {data.user.map(u => (
                                    <option key={u.id} value={u.id}>{u.name}</option>
                                ))}
                                
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">شناسه کاربر</label>
                            <input type="number" className="form-control mr-sm-2 border" placeholder="شناسه کاربر"  value={data.postData.userId} onChange={(e)=>setInputValues(e , "userId")}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">عنوان</label>
                            <input type="text" className="form-control mr-sm-2 border" placeholder="عنوان" value={data.postData.title} onChange={(e)=>setInputValues(e , "title")} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">توضیحات</label>
                            <textarea type="text" className="form-control mr-sm-2 border" placeholder="توضیحات..." value={data.postData.body} onChange={(e)=>setInputValues(e , "body")}></textarea>
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