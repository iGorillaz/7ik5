import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard.jsx/ProfileCard";
import s from "./LeftSide.module.css";

const LeftSide = () => {
  return (
    <div className={s.profileSide}>
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default LeftSide;
