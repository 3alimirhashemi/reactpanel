import { useNavigate, useParams } from "react-router-dom";


const AddUser = ()=>{
    const {userId} = useParams()
    const navigate = useNavigate()
    return(
        <div id="content" className="container">
            <h3><span className={userId ? "badge badge-warning" : "badge badge-primary"}>{userId ? "ویرایش کاربران:" : "ثبت نام کاربران:"}</span></h3>
            <div className="shadow p-3 mb-5 bg-body rounded">
                <form className="form-group">
                    <div className="form-group">
                        <label for="formGroupExampleInput2">نام</label>
                        <input type="text" className="form-control mr-sm-2 border" placeholder="مثال : محسن " size={20}/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">نام خانوادگی</label>
                        <input type="text" className="form-control mr-sm-2 border" placeholder="مثال : امیری" size={35}/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">تلفن</label>
                        <input type="tel" className="form-control mr-sm-2 border" placeholder="09121234567" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" size={11} required/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">ایمیل</label>
                        <input type="email" className="form-control mr-sm-2 border" placeholder="mohsen@gmail.com" pattern=".+@example\.com" size={30} required/>
                    </div>

                    <div className="form-group d-flex mt-5">

                        <input type="text" className="col form-control mr-sm-2 border" placeholder="کشور" />

                        <input type="text" className="col form-control mr-sm-2 border" placeholder="شهر" />

                        <input type="text" className="col form-control mr-sm-2 border" placeholder="خیابان"/>

                        <input type="text" className="col form-control mr-sm-2 border" placeholder="کوچه" />
                    </div>
                    <div className="form-group text-left p-3 mt-5">
                        <button className="btn btn-danger ml-1" onClick={()=>{navigate(-1)}}>بازگشت</button>
                        <button className={userId ? "btn btn-warning": "btn btn-primary"}>{userId ? "ویرایش" : "ثبت"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddUser;