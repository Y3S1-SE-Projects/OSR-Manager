import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {SERVER_URL} from "../../utils/config";
import "./style.css";
import Notification from "../../utils/Notification";

function TemplateView() {

    const [templates, setTemplates] = useState([]);

    const getTemplates = () => {

        try {
            axios.get(`${SERVER_URL}/template`).then(res=> {
                console.log(res.data);
                setTemplates(res.data);
            })

        } catch (err) {
            Notification("error", `${err.response.data.msg}`, 6000);
            //setData({...data, err: err.response.data.msg, success: ""});
        }
    };
    const deleteGroup = (id)=>{

        axios.delete(`${SERVER_URL}/template/${id}`).then(res=> {
            console.log(res.data);
            Notification("success", `Template deleted`, 6000);
        })
    }
    useEffect(()=>{getTemplates()},[]);
    return (
        <div className="background">
            <div className="container row col-md-4 col-md offset-4">
                <div className="loginInput">
                    <div className="col">
                        <h2 className="h4 text-center subtitle">Templates</h2>
                        <div className="studentThumbnail">
                            <span>

                        </span>
                            <br/>
                            <br/>
                            <table>
                                <thead>
                                <tr> </tr>
                                </thead>
                                <tbody>

                            {templates.map((template)=>(
                                <tr key={template._id}>

                                    <td><a href={template.file_link} target="_blank" rel="noopener noreferrer">{template.file_name}</a><br/>
                                        {template.updated_date}</td>
                                      <td>  <a className="btn btn-danger"  onClick={()=>deleteGroup(template._id)}>Delete</a>
                                    </td>
                                </tr>
                        ))}
                                </tbody>
                            </table>
                            <br/>

                        </div>
                        <div className="profile-form">
                            <div className="row">
                                <div className="col form-group d-grid">
                                   <a href="/template-upload" className="btn btn-success mt-3">
                                    Upload Template
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateView;