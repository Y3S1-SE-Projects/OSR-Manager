const router = require("express").Router();
const Post = require("../controllers/Post.Ctrl");

//CREATE POST
router.post("/", Post.createPost);

//UPDATE POST
router.put("/:id",Post.updatePost );

//DELETE POST
router.delete("/:id", Post.deletePost);

//GET POST
router.get("/:id", Post.getPost);

//GET ALL POSTS
router.get("/", Post.getAllPosts);

module.exports = router;
