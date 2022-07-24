import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";


import s from "./LeftSide.module.css";

const LeftSide = () => {

  return (
    <div className={s.leftSide}>
		<LogoSearch />
		<ProfileCard />
    </div>
  );
};

export default LeftSide;
