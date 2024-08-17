
import React from 'react';
import MainComp from './Hoc';



const HoverButton = (props)=>{
    const {click,handelSetClick} = props


    return(
        <div className='container'>
            <button className='btn btn-info' onMouseEnter={handelSetClick}>hover:{click}</button>

        </div>
    )

}
export default MainComp(HoverButton);