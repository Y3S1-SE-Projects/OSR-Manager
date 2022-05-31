import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
<<<<<<< HEAD
  const PF = "http://localhost:4000/images/";
=======
  const PF = "http://localhost:5000/images/";
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
