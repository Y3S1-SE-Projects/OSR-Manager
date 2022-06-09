import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {SERVER_URL} from "../../utils/config";
import "./style.css"
import Notification from "../../utils/Notification";
import Copyright from "../../components/Copyright";

function MarkingView() {

    const [markings, setMarkings] = useState([])
    const [loading, setLoading] = useState(false);
    //const [callback, setCallback] = useState(false);

    // const onDrop = (files) => {
    //     const [uploadedFile] = files;
    //     setFile(uploadedFile);
    //     setTemplate(uploadedFile);
    //     changeTemplate(uploadedFile);
    //     const fileReader = new FileReader();
    //     fileReader.onload = () => {
    //         setPreviewSrc(fileReader.result);
    //     };
    //     fileReader.readAsDataURL(uploadedFile);
    //     setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    //
    // };

    const getTemplates = () => {
        try {
            axios.get(`${SERVER_URL}/marking`).then(res=> {
                console.log(res.data);
                setMarkings(res.data);
            })

        } catch (err) {
            Notification("error", `${err.response.data.msg}`, 6000);
            //setData({...data, err: err.response.data.msg, success: ""});
        }
    };
    const deleteGroup = (id)=>{

        axios.delete(`${SERVER_URL}/marking/${id}`).then(res=> {
            console.log(res.data);
            Notification("success", `Marking Scheme deleted`, 6000);
        })
    }
    useEffect(()=>{getTemplates()},[]);
    return (
        <div className="background">
            <div className="container row col-md-4 col-md offset-4">
                <div className="loginInput">
                    <div className="col">
                        <h2 className="h4 text-center subtitle">Marking Schemes</h2>
                        <div className="studentThumbnail">
                            <span>

                        </span>
                            <br/>
                            <br/>
                            <table>
                                <thead>
                                <tr>
                                <td></td>
                                <td>Maximum Marks</td>
                                <td>Comments</td>
                                <td></td>
                                </tr>
                                </thead>
                                <tbody>

                            {markings.map((marking)=>(
                                <tr key={marking.id}>

                                    <td><a href={marking.file_link} target="_blank" rel="noopener noreferrer">{marking.file_name}</a><br/>
                                        {marking.updated_date}</td>
                                    <td>{marking.max_marks}</td>
                                    <td>{marking.comments}</td>
                                      <td>  <a className="btn btn-danger"  onClick={()=>deleteGroup(marking._id)}>Delete</a>
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
                                   <a href="/marking-upload" className="btn btn-success mt-3">
                                    Upload Marking Scheme
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright/>
        </div>
    );
}

export default MarkingView;