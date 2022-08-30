import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({post}) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo &&(
        <img className="postimage" src={PF +post.photo} alt="" />
      )}
      
      <div className="postinfo">
        <div className="postcats">
          {post.category.map((cat)=>{
            return  <span className="cat">{cat.name}</span>

          })}
         
 
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="posttitle" >{post.title}</span>
        </Link>
        <br />
        <span className="postdate">{new Date(post.createdAt).toDateString()} </span>
      </div>
      <p className="postdesc">
        {post.desc}
      </p>
    </div>
  );
};

export default Post;
