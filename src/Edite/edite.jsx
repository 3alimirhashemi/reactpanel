import { Link } from "react-router-dom";
const EditeComp = ()=>{
    return(
        <div className="container container-fluid">
            <h4 className="h4">
                 برای ویرایش؛ به صفحه کاربران بروید و بر روی ایکون <Link to="/user/"><i className="fa fa-edit text-warning"></i></Link>  کلیک نمایید.
            </h4>

        </div>
    )
}
export default EditeComp;