import axios from "axios"
import swal from "sweetalert"

export const jpAxsios = axios.create ({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout:15000,
    timeoutErrorMessage:
    swal(".هیچ عملیاتی انجام نشد",{
        icon: "warning",
        buttons:"بله",
      })
})