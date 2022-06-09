import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {SERVER_URL} from "../../utils/config";
import Dropzone from 'react-dropzone';
import "./style.css";
import {ProgressBar} from "react-bootstrap"
import Notification from "../../utils/Notification";


function TemplateUpload() {

    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage

    const [progress, setProgress] = useState();
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const dropRef = useRef();

    const updateBorder = (dragState) => {
        if (dragState === 'over') {
            dropRef.current.style.border = '2px solid #1c87c9';
        } else if (dragState === 'leave') {
            dropRef.current.style.border = '2px dashed #1c87c9';
        }
    };

    //const [data, setData] = useState(initialState);
   const [description, setDescription] = useState('');
    const [template, setTemplate] = useState(false)
    const [loading, setLoading] = useState(false);
    //const [callback, setCallback] = useState(false);

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);
        setTemplate(uploadedFile);
        changeTemplate(uploadedFile);
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));

    };

    const changeTemplate =  (e) => {
        e.preventDefault();
            const file = e.target.files[0];
            if (!file)
                return {err: "Please upload a file", success: ""};

            setTemplate(file);
        setFile(file);
            onDrop(file);
    };
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        try {

            // if (!file)
            //     return setData({ ...data, err: "No files uploaded", success: "" });
            //
            // if (file.size > 1024 * 1024) {
            //     return setData({ ...data, err: "Size too large", success: "" });
            // } // 1mb
            //
            // if (file.type !== "image/jpeg" && file.type !== "image/png") {
            //     return setData({
            //         ...data,
            //         err: "File format not supported",
            //         success: "",
            //     });
            // }
            let formData = new FormData();
            formData.append("file", file);
            console.log(file);

                setLoading(true);

                const res = await axios.post(`${SERVER_URL}/fileupload/template`, formData, {
                    headers: {
                        "content-type": "multipart/form-data"
                    },
                    onUploadProgress: data => {
                        //Set the progress value to show the progress bar

                        setProgress(Math.round((100 * data.loaded) / data.total))
                    },
                });

                setLoading(false);
                setTemplate(res.data.url);
                //console.log(template)
                const temp = await axios.post(`${SERVER_URL}/template`, {
                    "file_name": file.name,
                    "file_link": res.data.url,
                    "desc": description
                })
                console.log(temp)
                Notification("success", "Template is uploaded successfully", 6000);
               // window.location="/template";

        } catch (err) {
            Notification("error",`${err.response.data.msg}`,6000);
            //setData({...data, err: err.response.data.msg, success: ""});
        }
    };
    return (
        <div className="background">
            <div className="container row col-md-6 col-md offset-3">
                <div className="loginInput">
                    <div className="col">
                        <h2 className="h4 text-center subtitle">Template Upload</h2>
                        <div className="studentThumbnail">

                            <Dropzone
                                onDrop={onDrop}
                                onDragEnter={() => updateBorder('over')}
                                onDragLeave={() => updateBorder('leave')}>
                                {({getRootProps, getInputProps}) => (
                                    <div {...getRootProps({className: 'drop-zone'})} ref={dropRef}>
                                        <input {...getInputProps()} />
                                        <p>Drag and drop a file OR click here to select a file</p>
                                        {template && (
                                            <div>
                                                <strong>Selected file:</strong> {template.name}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </Dropzone>
                            <span>

              <input type="file" name="file" id="file_up" onChange={changeTemplate}/>
                        </span>
                            <br/>
                            <br/>
                            <br/>
                            {progress && <ProgressBar now={progress} label={`${progress}%`} />}
                        </div>
                        <div className="profile-form">

                            <div className="form-group col">
                                <label htmlFor="lastName">Description</label>
                                <input
                                    type="text"
                                    name="desc"
                                    className="form-control form-control-sm"
                                    placeholder="Description"
                                    defaultValue={description}
                                    required="true"
                                    onChange={(event)=>{setDescription(event.target.value)}}
                                />
                            </div>
                            <div className="row">
                                <div className="col form-group d-grid">
                                    <button
                                        onClick={handleOnSubmit}
                                        type={"submit"}
                                        className="btn btn-success mt-3"
                                        disabled={loading}
                                    >
                                        Upload File
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateUpload;