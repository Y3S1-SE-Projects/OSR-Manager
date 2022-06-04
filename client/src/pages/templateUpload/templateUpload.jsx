import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../../utils/config";

function TemplateUpload() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    password2: "",
    gender: "",
    err: "",
    success: "",
  };

  //const { student, isLogged } = auth;
  const [data, setData] = useState(initialState);
  const [template, setTemplate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [callback, setCallback] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const changeTemplate = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file)
        return setData({ ...data, err: "No files were uploaded", success: "" });

      // if (file.size > 1024 * 1024) {
      //     return setData({ ...data, err: "Size too large", success: "" });
      // } // 1mb

      // if (file.type !== "image/jpeg" && file.type !== "image/png") {
      //     return setData({
      //         ...data,
      //         err: "File format not supported",
      //         success: "",
      //     });
      // } // 1mb

      let formData = new FormData();
      formData.append("file", file);
      console.log(file);
      setLoading(true);

      const res = await axios.post(
        "https://osr-manager-server.herokuapp.com/fileupload/template",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      setTemplate(res.data.url);
      //console.log(template)
      const temp = await axios.post(
        "https://osr-manager-server.herokuapp.com/template",
        {
          file_name: file.name,
          file_link: res.data.url,
        }
      );
      console.log(temp);
    } catch (err) {
      setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  // const updateProfile = () => {
  //     try {
  //         axios.patch(
  //             "/student/update",
  //             {
  //                 firstName: firstName ? firstName : student.firstName,
  //                 lastName: lastName ? lastName : student.lastName,
  //                 address: address ? address : student.address,
  //                 phone: phone ? phone : student.phone,
  //                 thumbnail: thumbnail ? thumbnail : student.thumbnail,
  //             },
  //             {
  //                 headers: { Authorization: token },
  //             }
  //         );
  //         setData({ ...data, err: "", success: "Updated Successfully" });
  //     } catch (err) {
  //         setData({ ...data, err: err.response.data.msg, success: "" });
  //     }
  // };

  // const handleUpdate = () => {
  //     if (firstName || lastName || address || phone || thumbnail) updateProfile();
  //     if (password) updatePassword();
  // };

  return (
    <div>
      {/*<div className="row">*/}
      {/*    <div className="notification-bar">*/}
      {/*        <span>Loading...</span>*/}
      {/*    </div>*/}
      {/*</div>*/}

      <div className="row">
        <div className="col" id="studentWidget">
          <h2 className="h4 text-center subtitle">Template Upload</h2>
          <div className="studentThumbnail">
            <img
              //src={template ? template : student.thumbnail}
              alt=""
              className="img-fluid"
            />
            <span>
              <input
                type="file"
                name="file"
                id="file_up"
                onChange={changeTemplate}
              />
            </span>
          </div>
          <div className="profile-form">
            <div className="row">
              <div className="form-group col">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control form-control-sm"
                  placeholder="First Name"
                  //defaultValue={student.firstName}
                  id="firstName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control form-control-sm"
                  placeholder="Last Name"
                  //defaultValue={student.lastName}
                  id="lastName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-sm"
                  placeholder="Email"
                  // defaultValue={student.email}
                  id="email"
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control form-control-sm"
                  placeholder="Address"
                  //defaultValue={student.address}
                  id="address"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row">
              <div className="col form-group d-grid">
                <button
                  //onClick={handleUpdate}
                  className="btn btn-success mt-2"
                  disabled={loading}
                >
                  Update info
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="dashboardContent"></div>
      </div>
    </div>
  );
}

export default TemplateUpload;
