import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import LeftSide from "../../components/LeftSide/LeftSide";
import RightSide from "../../components/RightSide/RightSide";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.home}>
      <LeftSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
