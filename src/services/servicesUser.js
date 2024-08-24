import { jpAxsios } from "../axios/jpAxsion";
import swal from "sweetalert";

export const serviceAddUser = async (data)=>{
     const res = await jpAxsios.post('/users',data)
    if(res){
            swal(`.به لیست اضافه شد ${res.data.name}`, {
                icon: "success",
                buttons: "بله",
              });
    }else{

    }
}
export const servicePutUser = async (data, userId)=>{
    const res = await jpAxsios.put(`/users/${userId}`,data)
    if(res){
        swal(` .از لیست ویرایش شد ${res.data.name}`, {
            icon: "success",
            buttons: "بله",
          });

    }

}
export const serviceCreateUserbyGet = async (userId, setData)=>{
    const res = await jpAxsios.get(`/users/${userId}`)
    if (res){
        setData({
            name:res.data.name,
            username: res.data.username,
            phone:res.data.phone,
            email:res.data.email,
            address:{
                city:res.data.address.city,
                street:res.data.address.street,
                suite:res.data.address.suite,
                zipcode:res.data.address.zipcode,
            }
        })
    }
}