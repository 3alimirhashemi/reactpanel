import User from './Users/User'
import Main from './Main';
import Todolist from './Todolist/Todolist'
import Post from './Posts/Post'
import Gallery from './Gallery/Gallery'
import { Route, Routes } from 'react-router-dom';
const Content = ()=>{
    return(
        <div id="content" className="p-4 p-md-5 pt-5">
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='user' element={<User />} />
                    <Route path='todolist' element={<Todolist />} />
                    <Route path='post' element={<Post />} />
                    <Route path='gallery' element={<Gallery />} />
                </Routes>
        </div>
    )
}
export default Content;