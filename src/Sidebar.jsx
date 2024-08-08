import React,{ useContext} from "react";
import { MainContext } from "./contexts/MainContext";
import { NavLink } from "react-router-dom";

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
                <div>
                    <h1>
                        <NavLink to="/" className="logo">وبلاگ شخصی <span>مهارت ریکت</span></NavLink>
                    </h1>
                    <ul className="list-unstyled components mb-5">
                    
                        <li>
                        <NavLink to="/" style={({isActive}) =>{return isActive ? {color:'black'}:{}}}><span className="fa fa-home mr-3"></span> صفحه اصلی</NavLink>
                        </li>
                    
                    
                        <li>
                        <NavLink to="/user" style={({isActive}) =>{return isActive ? {color:'black'}:{}}}><span className="fa fa-user mr-3"></span> کاربران</NavLink>
                        </li>
                    
                    
                        <li>
                        <NavLink to="/post" style={({isActive}) =>{return isActive ? {color:'black'}:{}}}><span className="fa fa-sticky-note mr-3"></span> پست ها</NavLink>
                        </li>
                    
                   
                        <li>
                        <NavLink to="/gallery" style={({isActive}) =>{return isActive ? {color:'black'}:{}}}><span className="fa fa-image mr-3"></span> گالری </NavLink>
                        </li>
                   
                    
                        <li>
                        <NavLink to="/todolist" style={({isActive}) =>{return isActive ? {color:'black'} : {}}}><span className="fa fa-check mr-3"></span> لیست</NavLink>
                        </li>
                    
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Sidebar;