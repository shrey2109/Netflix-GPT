import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col bg-black text-red-600">
      <div className="font-extrabold text-9xl">404</div>
      <div className="font-bold text-5xl">Page Not Found!!</div>
    </div>
  );
};

export default ErrorPage;
