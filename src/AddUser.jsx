import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const AddUser = ()=>{
    const {userId} = useParams()
    const navigate = useNavigate()
    const [data,setData] = useState({
        name:'',
        username:'',
        phone:'',
        email:'',
        address:{
            city:'',
            suit:'',
            street:'',
            zipcode:'',
        }

    })
    const handelAddUser = (e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', data).then(res=>{
            console.log(res);
        });
    }
    return(
        <div id="content" className="container">
            <h3><span className={userId ? "badge badge-warning" : "badge badge-primary"}>{userId ? "ویرایش کاربران:" : "ثبت نام کاربران:"}</span></h3>
            <div className="shadow p-3 mb-5 bg-body rounded">
                <form onSubmit={handelAddUser} className="form-group">
                    <div className="form-group">
                        <label className="form-label"> نام و نام خانوادگی</label>
                        <input type="text" className="form-control mr-sm-2 border" placeholder="مثال : محسن " size={20} value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">نام کاربری</label>
                        <input type="text" className="form-control mr-sm-2 border" placeholder="مثال : امیری" size={35} value={data.username} onChange={(e)=>setData({...data, username:e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">تلفن</label>
                        <input type="tel" className="form-control mr-sm-2 border" placeholder="09121234567" size={11} value={data.phone} onChange={(e)=>setData({...data, phone:e.target.value})} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">ایمیل</label>
                        <input type="email" className="form-control mr-sm-2 border" placeholder="mohsen@gmail.com" size={30} value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} required/>
                    </div>

                    <div className="form-group d-flex mt-5">

                        <input type="text" className="col form-control mr-sm-2 border" value={data.address.city} onChange={(e)=>setData({...data , address:{...data.address, city:e.target.value}})} placeholder="کشور" />

                        <input type="text" className="col form-control mr-sm-2 border" value={data.address.suit} onChange={(e)=>setData({...data, address:{...data.address, suit:e.target.value}})} placeholder="شهر" />

                        <input type="text" className="col form-control mr-sm-2 border" value={data.address.street} onChange={(e)=>setData({...data, address:{...data.address, street:e.target.value}})} placeholder="خیابان"/>

                        <input type="text" className="col form-control mr-sm-2 border" value={data.address.zipcode} onChange={(e)=>setData({...data, address:{...data.address, zipcode:e.target.value}})} placeholder="کوچه" />
                    </div>
                    <div className="form-group text-left p-3 mt-5">
                        <button className="btn btn-danger ml-1" onClick={()=>{navigate(-1)}}>بازگشت</button>
                        <button type="submit" className={userId ? "btn btn-warning": "btn btn-primary"}>{userId ? "ویرایش" : "ثبت"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddUser;