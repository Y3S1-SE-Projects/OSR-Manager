import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const Notification = (type,message,timeout) => {
    switch (type){
        case 'success':
            return toast.success(message,{autoClose:timeout,theme: "colored"})
        case 'warning':
            return toast.warning(message,{autoClose:timeout, theme: "colored"})
        case 'error':
            return toast.error(message,{autoClose:timeout,theme: "colored"})
        case 'info':
            return toast.info(message,{autoClose:timeout,theme: "colored"})
        default:
            return toast(message,{autoClose:timeout})
    }
};

export default Notification;