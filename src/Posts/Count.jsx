import React from "react";
import MainComp from './Hoc'


const CountButton = (props)=>{
    const {click,handelSetClick} = props
    return(
        <div className="container">
            <button className="btn btn-success" onClick={handelSetClick}>count:{click}</button>
        </div>
    )
}
export default MainComp(CountButton);