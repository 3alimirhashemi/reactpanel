import React from "react";
import { useState } from "react";

const MainComp = MainComponent =>{
    const NewComp = ()=>{
        const [click , setClick] = useState(0);
        const handelSetClick = ()=>{
            setClick(click + 1)
        }
        return(
            <MainComponent click={click} handelSetClick={handelSetClick}/>
        )
    }
    return NewComp;
}
export default MainComp;