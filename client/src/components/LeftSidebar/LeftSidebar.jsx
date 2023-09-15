import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import './LeftSidebar.css'

const LeftSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="left-sidebar">
      <div className="menu">
        <Link to="/">
          <div className="menu-item">
            <HomeIcon fontSize="large" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="menu-item">
            <TagIcon fontSize="large" />
            <p>Explore</p>
          </div>
        </Link>
        <Link to={`/profile/${currentUser._id}`}>
          <div className="menu-item">
            <PersonIcon fontSize="large" />
            <p>Profile</p>
          </div>
        </Link>
      </div>
      <div className="user-info">
        <div>
          <p className="font-bold">{currentUser.username}</p>
          <p className="font-bold">@{currentUser.username}</p>
        </div>
        <div>
          <Link to="signin">
            <button
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
