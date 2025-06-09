import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { checkValidData, BG_URL, auth, addUser } from "../utils";
import { Header } from ".";

export const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [dummyCredentials, setDummyCredentials] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Rather than creating state variables for email and password -> WE WILL USE useRef
  // we are using ref={email} in input box.
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message); // to print on screen
    if (message) return;

    // SignUp / LogIn Logic
    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // LogIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const toggleShowDummyCredentials = () => {
    setDummyCredentials(true);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="background"
          className="brightness-50 h-screen object-cover w-screen"
        ></img>
      </div>

      <div className="flex items-center justify-center h-screen">
        <form
          // onClick of any form button it calls onSubmit method, which we did not written, so page is refreshing
          // e.preventDefault() prevents the form from being submitted in the traditional way (which would cause a page reload). This is often used in combination with asynchronous operations or when you want to handle the form submission manually using JavaScript.
          onSubmit={(e) => e.preventDefault()}
          className="bg-black z-10 absolute w-[350px] md:w-[430px] p-6 md:p-16 text-white bg-opacity-75"
        >
          <h1 className="font-bold text-2xl md:text-3xl m-2 mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 m-2 w-full rounded-sm bg-zinc-700 "
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 w-full rounded-sm bg-zinc-700 "
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 m-2 w-full rounded-sm bg-zinc-700"
          />
          <p className="m-2 text-red-600 font-medium text-lg">{errorMessage}</p>
          <button
            className="m-2 mt-8 p-3 bg-red-600 w-full rounded-sm font-semibold hover:bg-red-700"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="italic text-gray-400 pl-5">
            <span
              className="cursor-pointer hover:underline"
              onClick={toggleShowDummyCredentials}
            >
              {!dummyCredentials
                ? "Use dummy credentials to explore..."
                : "Email : hellothere@explore.com Password : helloThere1"}
            </span>
          </p>
          <p className="p-2 pt-6 md:pt-16 text-white ">
            <span
              className="cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix? Sign Up"
                : "Already a User? Sign In"}{" "}
              now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
