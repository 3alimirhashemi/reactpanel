import React from "react";
import swal from "sweetalert";

const SweetAlert = (MainComponent) =>{



    const SweetComp = (props)=>{

        const Confirm = (message)=>{
            return swal({
                title: message,
                text: "!رکورد به صورت کامل حذف می شود و امکان بازیابی نیست",
                icon: "warning",
                buttons: ["خیر","بله"],
                dangerMode: true,
                
              })
        }
        const Alert = (message, icon)=>{
            return swal(message, {
                  icon: icon,
                  buttons: "بله",
                });

        }

        return(
            <MainComponent {...props} Confirm={Confirm} Alert={Alert}/>
        )
    }
    return SweetComp;
}
export default SweetAlert;