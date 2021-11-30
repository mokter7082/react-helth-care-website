import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Apointed = () => {
  const { user } = useAuth();

  //   console.log(user);
  return (
    <div className="col-md-7 mx-auto mt-4">
      <h2 className="bg-success p-3 rounded">
        Your ApointMent SucecssFull <br /> we are contact With you as soon as
        possible{" "}
      </h2>
      <div className="row">
        <div className="text-center">
          {" "}
          <h3>Applicate details</h3>
          <h5>Name: {user.displayName}</h5>
          <h5>Email: {user.email}</h5>
          <img src={user.photoURL} alt="" />
          <h2>Thank You So much</h2>
        </div>
      </div>
    </div>
  );
};

export default Apointed;
