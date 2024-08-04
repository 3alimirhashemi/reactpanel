const sidebar = ()=>{
    return(
        <>
            <nav id="sidebar" className="order-last">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary">
                    </button>
                </div>
                <div className="">
                    <h1>
                        <a href="index.html" className="logo">وبلاگ شخصی <span>مهارت ریکت</span></a>
                    </h1>
                    <ul className="list-unstyled components mb-5">
                        <li className="active">
                            <a href="/"><span className="fa fa-home mr-3"></span> صفحه اصلی</a>
                        </li>
                        <li>
                            <a href="/"><span className="fa fa-user mr-3"></span> کاربران</a>
                        </li>
                        <li>
                            <a href="/"><span className="fa fa-sticky-note mr-3"></span> پست ها</a>
                        </li>
                        <li>
                            <a href="/"><span className="fa fa-image mr-3"></span> گالری</a>
                        </li>
                        <li>
                            <a href="/"><span className="fa fa-check mr-3"></span> لیست</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default sidebar;