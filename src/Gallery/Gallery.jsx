import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = ()=>{
    const [photo,setPhoto] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res=>{
            console.log(res);
            setPhoto(res.data)
        })

    },[photo])

    
    return(
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">گالری</h2>
            {photo.length ? (
                            
                            <div class="row">
                            {photo.slice(0,30).map(u=>(
            
                                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 text-center">
                                    <img
                                    src={u.url}
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt={u.title}
                                    />
                                   
                                    <span className="mb-5 text-start badge badge-info">{u.title}</span>     
                                        
                                </div>
                            ))}
            
                            </div>
                        
            ):(
                <>
                <h1 className="display-4 text-info">لطفا منتظر بمانید...</h1>
                </>
            )}
        </div>
    )
}
export default Gallery;