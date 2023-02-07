import React from "react";
import { Outlet } from "react-router-dom";
import SignUp from "../components/signUp/SignUp";
import { useAuth } from "../hook/UseAuth";

export const ProtectedRoute = () => {
  const user = useAuth();

  console.log("/////user autheticated", user);

  return typeof user === "undefined" ? (
    <div className="preloader-wrapper small active ">
      <div className="spinner-layer spinner-green-only ">
        <div className="circle-clipper left ">
          <div className="circle "></div>
        </div>
        <div className="gap-patch ">
          <div className="circle "></div>
        </div>
        <div className="circle-clipper right ">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  ) : user ? (
    <Outlet />
  ) : (
    <SignUp />
  );
};
