import User from './Users/User'
import Main from './Main';
import Todolist from './Todolist/Todolist'
import Post from './Posts/Post'
import Gallery from './Gallery/Gallery'
const Content = ()=>{
    return(
        <div id="content" className="p-4 p-md-5 pt-5">
            <Main />
            <User />
            <Todolist />
            <Post />
            <Gallery />

        </div>
    )
}
export default Content;