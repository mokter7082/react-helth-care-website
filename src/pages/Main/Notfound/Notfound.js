import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="col-md-8 mx-auto">
      <img
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"
        alt=""
      />
      <Link to="/">
        <h2>Home</h2>
      </Link>
    </div>
  );
};

export default Notfound;
