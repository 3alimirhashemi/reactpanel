
import { useEffect, useState } from "react";
import { getServicePost } from "../services/ServicePost";
import { Link, useNavigate } from "react-router-dom";
import SweetAlert from "../HOC/SweetAlert";


const Post = ()=>{
    const [post , setPost] = useState([]);
    const [mainPost , setMainPost] = useState([]);
    const [uId, setUid] = useState("");

    const navigate = useNavigate();

    const handelSearch = () => {
        if (uId > 0)setPost(mainPost.filter(p=>p.userId === uId))
        else setPost(mainPost)
        
    }

    const handelDel = async (postId) => {

    }
    
    const getPost = async ()=>{
        const res = await getServicePost();
        setPost(res.data)
        setMainPost(res.data)


    }
    useEffect(()=>{
        console.log('first log');
        getPost();
    } , [])

    useEffect(()=>{
        console.log('every change');
    })

    useEffect(()=>{
        console.log('every uid change');
        handelSearch()

    } , [uId])


    return(
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">پست</h2>
            <div className="mb-5 px-4">
                <form className="form-inline my-2 my-lg-0">
                    <div className="form-group d-flex">
                        <input type="search" className="form-control mr-sm-2 border" value={uId} onChange={(e)=>setUid(e.target.value)} placeholder="جستجو براساس شماره ..." />
                        <button className="form-control border btn btn-dark m-1" type="submit"><span className="fa fa-search mr-0 p-2" ></span></button>
                    </div>
                    <Link to="/post/add">
                        <div className="form-group d-flex">
                            <button className="btn btn-success m-1 m-lg-5"><span className="fa fa-plus mr-0 p-2"></span></button>
                        </div>
                    </Link>
                </form>
            </div> 

            {post.length ? (
                            
                <div className="container">
                    {post.map(u=>(
                        <div>
                        <h1 className="text-center badge badge-info">{u.title}</h1>
                        <p className="justify-content-center">{u.body}</p>
                        <div className="d-flex justify-content-end">
                            <div className="m-1">
                                <span className="fa fa-user-circle-o text-info"></span>
                                <p className="badge badge-light pl-2 pointer" onClick={()=>setUid(u.userId)}>{u.userId}</p>
                            </div>
                            <div className="m-1">
                                <span className="fa fa-comment text-success"></span>
                                <p className="badge badge-light pl-2">{u.id}</p>
                            </div>
                            <div className="m-1">
                                <span className="fa fa-heart text-danger"></span>
                                <p className="badge badge-light pl-2">{u.userId}</p>
                            </div>
                            <div className="m-1">
                                <i className="fa fa-edit text-warning pointer" onClick={()=>{navigate(`post/add/${u.id}`)}}></i>
                                <i className="fa fa-trash text-danger mx-2 pointer" onClick={()=>{handelDel(u.id)}}></i>
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
export default SweetAlert(Post);