import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import s from "./PostSide.module.css";

const PostSide = () => {
  return (
    <div className={s.postSide}>
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
