import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  //! We have to setup this kind of event listener only once on APP level, that's why we did this
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //* User is signed in
        // const uid = user.uid;
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        //* REDIRECT USER TO THE OTHER PAGE.
        // navigate("/browse");
      } else {
        //* User is signed out
        dispatch(removeUser());

        //* REDIRECT USER TO THE MAIN PAGE.
        // navigate("/");
      }

      //* ==> navigate from here will throw an error, as we are providing router in body, so we can't do this.
      // 1. use window.redirect.... something -> but it's not nice to use this
      // 2. do routing in App.js
      //*3. do not use navigate here, but use there when we actually want to use it -> after sign in/sign up -> navigate("/browse")...
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
