import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //! Rather than creating state variables for email and password -> WE WILL USE useRef
  //! we are using ref={email} in input box.
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //! Validate the form
    // console.log(email.current.value); // according to the useRef response

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message); // to print on screen
    if (message) return;

    // SignIn / SignUp Logic
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
              // const { uid, email, displayName } = user;
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.errorMessage);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
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

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://th.bing.com/th/id/R.d2edb29f3f970c36aadecbb01ed0bb79?rik=z%2bAuuobpN0KNSg&riu=http%3a%2f%2fisquad.tv%2fwp-content%2fuploads%2f2018%2f08%2fNetflix-Background.jpg&ehk=Ij4PSd%2bZkTcESSlAVWoGpNmExM0fu3BgteNT6AnS9lM%3d&risl=&pid=ImgRaw&r=0"
          alt="background"
          className="brightness-50"
        ></img>
      </div>
      <form
        // onClick of any form button it calls onSubmit method, which we did not written, so page is refreshing
        // e.preventDefault() prevents the form from being submitted in the traditional way (which would cause a page reload). This is often used in combination with asynchronous operations or when you want to handle the form submission manually using JavaScript.
        onSubmit={(e) => e.preventDefault()}
        className="bg-black z-10 absolute w-[430px] my-36 mx-auto right-0 left-0 text-white p-16 bg-opacity-75"
      >
        <h1 className="font-bold text-3xl m-2 mb-7">
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
          className="m-2 mt-8 p-3 bg-red-600 w-full rounded-sm font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 pt-16 text-white ">
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
  );
};

export default Login;
