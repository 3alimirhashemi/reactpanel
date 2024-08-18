import { useNavigate,Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import SweetAlert from "../HOC/SweetAlert";

const User = (props)=>{
  const navigate = useNavigate()
  const [ users,setUsers ] = useState([]);
  const [mainUser, setMainUser] = useState([]);
  const {Confirm,Alert} = props;
  useEffect(()=>{
    
    axios.get('https://jsonplaceholder.typicode.com/users', users).then(res=>{
      setUsers(res.data)
      setMainUser(res.data)
      
    }).catch(err=>{
      console.log(err);
    })
    
  }, [users]);
  
    const handelDel = async (userId)=>{
            
            if (await Confirm(`از حذف رکورد ${userId} اطمینان دارید؟`)) {
              axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>{
                console.log(res);
                if (res.status === 200){
                  const newUsers = users.filter(u=>u.id !== userId);
                  setUsers(newUsers);
                  Alert('.رکورد با موفقیت حذف شد',"success")
                
                }else{
                  Alert('.عملیات با خطا مواجه شد',"error")
                }
              })
            } else {

              Alert(".شما از حدف رکورد منصرف شدید", "info")
            }
          
    }

    const handelSearch = (e)=>{
      e.preventDefault();
      setUsers(mainUser.filter(u=>u.name.includes(e.target.value)))

    }

    return(
        <div id="content" className="p-4 p-md-5 pt-5">
            <div className="mb-5 px-4">
                <form className="form-inline my-2 my-lg-0">
                    <div className="form-group d-flex">
                        <input type="search" className="form-control mr-sm-2 border" onChange={handelSearch} placeholder="جستجو براساس نام ..." />
                        <button className="form-control border btn btn-dark m-1" type="submit"><span className="fa fa-search mr-0 p-2" ></span></button>
                    </div>
                    <Link to="/user/add">
                        <div className="form-group d-flex">
                            <button className="btn btn-success m-1 m-lg-5"><span className="fa fa-plus mr-0 p-2"></span></button>
                        </div>
                    </Link>
                </form>
            </div>
            <h2 className="mb-4">کاربران</h2>
            {users.length ? (
                <div className="mb-4">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">شماره</th>
                        <th scope="col"> نام و نام خانوادگی</th>
                        <th scope="col">نام کاربری</th>
                        <th scope="col">موبایل</th>
                        <th scope="col">ایمیل</th>
                        <th scope="col">آدرس</th>
                        <th scope="col">عملیات</th>
                        </tr>
                    </thead>
                    {users.map(u=>(
                                    <tbody>
                                          <tr key={u.id}>
                                            <th scope="row">{u.id}</th>
                                            <td>{u.name}</td>
                                            <td>{u.username}</td>
                                            <td>{u.phone}</td>
                                            <td>{u.email}</td>
                                            <td>{u.address.city},{u.address.street},{u.address.suite},{u.address.zipcode}</td>
                                            <td className="h5 mx-2">

                                                <i className="fa fa-edit text-warning" onClick={()=>{navigate(`user/add/${u.id}`)}}></i>

                                                <i className="fa fa-trash text-danger mx-2" onClick={()=>{handelDel(u.id)}}></i>
                                            </td>
                                          </tr>
                                      </tbody>
                    ))}
                </table>
            </div>
            ):(
              <div className="mb-4">
                  <h3 className="display-4 text-danger">لطفا منتظر بمانید.</h3>
              </div>
            )}
            <hr />
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        </div>
    )
}
export default SweetAlert(User);