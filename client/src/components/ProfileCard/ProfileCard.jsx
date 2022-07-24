import React from "react";
import s from "./ProfileCard.module.css";
import Cover from "../../assets/cover.jpg";
import Ava from "../../assets/myPhoto.jpg";

const ProfileCard = () => {
  return (
    <div className={s.ProfileCard}>
      <div className={s.avatar}>
        <img src={Cover} alt="cover" />
        <img src={Ava} alt="profile" />
      </div>

      <div className={s.ProfileName}>
        <span>Denny </span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className={s.followStatus}>
      <hr />
        <div>
          <div className={s.follow}>
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className={s.vl}></div>
          <div className={s.follow}>
            <span>1</span>
            <span>Followers</span>
          </div>

          {/* {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )} */}
        </div>
        <hr />
      </div>
      {/* {ProfilePage ? "" : <span>My Profile</span>} */}
    </div>
  );
};

export default ProfileCard;
