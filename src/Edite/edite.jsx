import { useNavigate } from "react-router-dom";
const EditeComp = ()=>{
    const navigate = useNavigate()
    return(
        <div className="container container-fluid">
            <h4 className="h4">
                 برای ویرایش؛ به صفحه کاربران بروید و بر روی ایکون<i className="fa fa-edit text-warning pointer" onClick={()=>{navigate('user')}}></i>  کلیک نمایید.
            </h4>

        </div>
    )
}
export default EditeComp;