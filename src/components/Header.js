import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { auth, LOGO, SUPPORTED_LANGUAGES, USER_PROFILE, addUser, removeUser, toggleGptSearchView, changeLanguage } from '../utils';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptPage = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //* User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        const currentURL = document.URL;
        const part =
          currentURL.split('/').length > 2 ? currentURL.split('/')[3] : '';
        if (!part) navigate('/browse');
      } else {
        //* User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);

  const handleGptSearchClick = () => {
    // toggle functionality for gpt search page
    dispatch(toggleGptSearchView());
    if (!gptPage) navigate('/search');
    else navigate('/browse');
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 w-full flex flex-col md:flex-row justify-between bg-gradient-to-b from-black">
      <img
        src={LOGO}
        alt="logo"
        className="w-36 md:w-44 mx-auto md:mx-0 z-10"
      ></img>
      {user && (
        <div className="p-2 md:mr-8 flex flex-col items-center">
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
              className="mr-2 p-1 md:p-2 px-4 md:w-52 md:font-semibold rounded-lg bg-purple-600 text-white hover:border-2 hover:bg-opacity-70"
              onClick={handleGptSearchClick}
            >
              {gptPage ? 'Home Page' : 'GPT Search'}
            </button>
            <img src={USER_PROFILE} alt="userImg" className="h-9 md:h-11"></img>

            <div className="">
              <h1 className="text-purple-400 ml-2">{user?.displayName}</h1>
              <button
                className="font-bold text-red-500 ml-2"
                onClick={handleSignOut}
              >
                SignOut
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
