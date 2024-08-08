import React,{ useContext} from "react";
import { MainContext } from "./contexts/MainContext";
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    const {showMenu,setShowMenu}= useContext(MainContext)

    const handelShowMenu =(event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
    }
    return(
        <>
            <nav id="sidebar" className="order-last" style={showMenu ? {left:300} : {}}>
                <div className="custom-menu">
                    <button onClick={handelShowMenu} type="button" id="sidebarCollapse" className="btn btn-primary">
                    </button>
                </div>
                <div className="">
                    <h1>
                        <Link to="/" className="logo">وبلاگ شخصی <span>مهارت ریکت</span></Link>
                    </h1>
                    <ul className="list-unstyled components mb-5">
                        <li className="active">
                            <Link to="/"><span className="fa fa-home mr-3"></span> صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link to="/user"><span className="fa fa-user mr-3"></span> کاربران</Link>
                        </li>
                        <li>
                            <Link to="/post"><span className="fa fa-sticky-note mr-3"></span> پست ها</Link>
                        </li>
                        <li>
                            <Link to="/gallery"><span className="fa fa-image mr-3"></span> گالری</Link>
                        </li>
                        <li>
                            <Link to="/todolist"><span className="fa fa-check mr-3"></span> لیست</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Sidebar;