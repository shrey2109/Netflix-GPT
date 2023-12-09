import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptPage = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //* User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        //* User is signed out
        dispatch(removeUser());
        navigate("/");
      }

      return unsubscribe();
    });
  }, []);

  const handleGptSearchClick = () => {
    // toggle functionality for gpt search page
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 w-full flex justify-between bg-gradient-to-b from-black">
      <img src={LOGO} alt="logo" className="h-[75px] ml-7 z-10"></img>
      {user && (
        <div className="p-2 mr-8 flex flex-col items-center">
          <div className="flex items-center">
            {gptPage && (
              <select
                className="p-1.5 m-2 rounded-md bg-purple-950 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="m-2 p-2 w-52 font-semibold rounded-lg bg-purple-600 text-white"
              onClick={handleGptSearchClick}
            >
              {gptPage ? "Home Page" : "GPT Search"}
            </button>
            <img
              src="https://cloud27designco.com/wp-content/uploads/2020/04/C27_Logo_Icon-min-org_wht-800x800.png"
              alt="userImg"
              className="h-11"
            ></img>

            <div className="">
              <h1 className="ml-1 font-bold text-purple-400">
                Welcome, {user?.displayName}
              </h1>
              <button
                className="font-bold text-red-500 mx-3"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
