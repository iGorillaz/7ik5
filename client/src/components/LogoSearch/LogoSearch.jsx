import React from "react";
import SearchLogo from "../../assets/SearchLogo.png";
import s from "./LogoSearch.module.css";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <div className={s.LogoSearch}>
      <img src={SearchLogo} alt="search-logo" />
      <div className={s.Search}>
        <input type="text" placeholder="Search" />
        <div className={s.sIcon}>
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
