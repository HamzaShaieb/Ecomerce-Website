import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useSelector } from "react-redux";

export default function Topbar() {
  const user = useSelector((state) =>
  state.user.currentUser
);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">TechShop</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />

          </div>
          <div className="topbarIconContainer">
            <Language />
 
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={user.img} />
        </div>
      </div>
    </div>
  );
}
