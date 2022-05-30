import React from 'react';
import Notification from "../utils/Notification";

const toastMsg = () => {

    const notify = ()=>{
        Notification('info',"Info message",8000)
        Notification('warning',"Warning message",7000)
        Notification('success',"Success message",6000)
        Notification('error',"Error message")
        Notification('e',"Default message")
    }

    return (
        <div>
            <h1>Notifications</h1>
            <button onClick={notify}> Click Me!</button>
        </div>
    );
};

export default toastMsg;