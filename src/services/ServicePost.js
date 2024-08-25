import { jpAxsios } from "../axios/jpAxsion";
import swal from "sweetalert";


export const getServicePost = ()=>{
    return jpAxsios.get('/posts');
}

export const serviceAddPost = async (data)=>{
     const res = await jpAxsios.post('/posts',data)
    if(res){
            swal(`.به لیست اضافه شد ${res.data.title}`, {
                icon: "success",
                buttons: "بله",
              });
    }else{

    }
}

export const serviceUpdatePost = async (data, postId)=>{
    const res = await jpAxsios.put(`/posts/${postId}`,data)
    if(res){
        swal(` .از لیست ویرایش شد ${res.data.title}`, {
            icon: "success",
            buttons: "بله",
          });

    }
}