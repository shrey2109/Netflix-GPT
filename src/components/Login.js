import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
      <form className="bg-black z-10 absolute w-[430px] my-36 mx-auto right-0 left-0 text-white p-16 bg-opacity-75">
        <h1 className="font-bold text-3xl m-2 mb-7">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
        type="text"
        placeholder="Full Name"
        className="p-3 m-2 w-full rounded-sm bg-zinc-700 "
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-2 w-full rounded-sm bg-zinc-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-full rounded-sm bg-zinc-700"
        />
        <button className="m-2 mt-8 p-3 bg-red-600 w-full rounded-sm font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-2 pt-16 text-white cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix? Sign Up" : "Already a User? Sign In"}{" "}
          now
        </p>
      </form>
    </div>
  );
};

export default Login;
