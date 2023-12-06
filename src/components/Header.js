import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // no dispatch as it is handled by onAuthStateChanged
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute z-10 w-full flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="h-[90px] ml-7 z-10"
      ></img>
      {user && <div className="p-2 mr-8 flex flex-col items-center">
        <div className="flex items-center">
          <img
            src="https://cloud27designco.com/wp-content/uploads/2020/04/C27_Logo_Icon-min-org_wht-800x800.png"
            alt="userImg"
            className="h-11"
          ></img>
          <h1 className="ml-1 font-medium text-purple-600">Welcome, {user?.displayName}</h1>
        </div>
        <button className="font-bold text-red-500" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
