import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
<<<<<<< HEAD
import { axiosInstance } from "../../config";
import { useLocation } from "react-router";
=======
import axios from "axios";
import { useLocation } from "react-router";
import {SERVER_URL} from "../../utils/config";
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
<<<<<<< HEAD
      const res = await axiosInstance.get("/posts" + search);
=======
      const res = await axios.get(`${SERVER_URL}/posts` + search);
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
