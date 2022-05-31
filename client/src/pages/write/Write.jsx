import { useContext, useState } from "react";
import "./write.css";
<<<<<<< HEAD
import { axiosInstance } from "../../config";
=======
import axios from "axios";
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
<<<<<<< HEAD
      const data = new FormData();
=======
      const data =new FormData();
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
<<<<<<< HEAD
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post("/posts", newPost);
=======
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
<<<<<<< HEAD
            onChange={(e) => setTitle(e.target.value)}
=======
            onChange={e=>setTitle(e.target.value)}
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
<<<<<<< HEAD
            onChange={(e) => setDesc(e.target.value)}
=======
            onChange={e=>setDesc(e.target.value)}
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
