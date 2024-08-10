import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useEffect, useState } from "react";

const User = ()=>{


    const [ users,setUsers ] = useState([]);
    useEffect(()=>{

// new Promise
      // new Promise((resolve, reject)=>{
      //   console.log(1);
      //   setTimeout(() => {
      //     console.log(2);
      //     resolve(true)
      //   }, 1000);

      // }).then(res=>{
      //   console.log(3);
      // }).catch(err=>{
      //   console.log(err);
            // })
// end new promise

// async & await
    //   const func =()=>{
    //     return new Promise ((resolve, reject)=>{
    //       console.log(1);
    //       setTimeout(() => {
    //         console.log(2);
    //         resolve(true)
    //       }, 1000);

    //   }) 
    // }
    //   const test = async ()=>{
    //     const res = await func();
    //     if (res){
    //       console.log(3);
    //     }
    //   }
    //   test();
// end async & await

      // const prom = (id)=>{
      //   return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      // }

      //  const func = async (id)=>{
      //    // await prom(id).then(res=>{
      //     //   console.log(res.data);
      //     // });
      //     const res = await prom(id)
      //     console.log(res);
      //     console.log(id);
      //  }  
       
      // for (const item of [1,2,3,4,5,6]){

      //   func(item);
      // }

      axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
          setUsers(res.data)
          
      }).catch(err=>{
          console.log(err);
      })

    }, []);

    const handelDel = (timeIde)=>{
        swal({
            title: `از حذف رکورد ${timeIde} اطمینان دارید؟`,
            text: "!رکورد به صورت کامل حذف می شود و امکان بازیابی نیست",
            icon: "warning",
            buttons: ["خیر","بله"],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal(" .رکورد حذف شد ", {
                icon: "success",
              });
            } else {
              swal(".هیچ عملیاتی انجام نشد",{
                icon: "info",
              });
            }
          });
    }
    return(
        <div id="content" className="p-4 p-md-5 pt-5">
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
                                            <td>{u.address.city},{u.address.street},{u.address.suit},{u.address.zipcode}</td>
                                            <td className="h5 mx-2">
                                                <Link to="/user/add/2" >
                                                <i className="fa fa-edit text-warning"></i>
                                                </Link>
                                                <i className="fa fa-trash text-danger mx-2" onClick={()=>{handelDel(1)}}></i>
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
export default User;