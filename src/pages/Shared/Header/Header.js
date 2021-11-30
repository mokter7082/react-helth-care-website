import React from "react";
import useAuth from "../../../Hooks/useAuth";
import Mynav from "../Mynav/Mynav";
import "./Header.css";

const Header = () => {
  const { user } = useAuth();
  return (
    <div className="header-top py-2">
      <div className="d-flex justify-content-between container">
        <div className="">
          <p className="regular-text">An apple a day keeps the doctor away</p>
        </div>
        <div className="">
          <p className="regular-text">
            <i className="fas fa-home"></i> Address: 227 Marion Street,
            Columbia, SC 29201
          </p>
          <h6 className="text-success">User Name: {user.displayName}</h6>
        </div>
      </div>
      <Mynav></Mynav>
    </div>
  );
};

export default Header;
