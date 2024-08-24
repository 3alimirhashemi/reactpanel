import { jpAxsios } from "../axios/jpAxsion";
import swal from "sweetalert";


export const getServicePost = ()=>{
    return jpAxsios.get('/posts');
}

// export const serviceAddUser = async (data)=>{
//      const res = await jpAxsios.post('/users',data)
//     if(res){
//             swal(`.به لیست اضافه شد ${res.data.name}`, {
//                 icon: "success",
//                 buttons: "بله",
//               });
//     }else{

//     }
// }
// export const servicePutUser = async (data, userId)=>{
//     const res = await jpAxsios.put(`/users/${userId}`,data)
//     if(res){
//         swal(` .از لیست ویرایش شد ${res.data.name}`, {
//             icon: "success",
//             buttons: "بله",
//           });

//     }