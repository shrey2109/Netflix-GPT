import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieDetail from "./MovieDetail";
import ErrorPage from "./ErrorPage";
// import GptSearch from "./GptSearch";

//* Previous routing
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "browse",
//         element: <Browse />,
//       },
//       {
//         path: "search",
//         element: <GptSearch />,
//       },
//       {
//         path: "movieDetail/:movieId",
//         element: <MovieDetail />,
//       },
//     ],
//     errorElement: <ErrorPage />, // Render ErrorPage for unmatched routes within this parent route
//   },
// ]);

const GptSearch = lazy(() => import("./GptSearch"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/search",
    // element: <GptSearch />,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <GptSearch />,
      </Suspense>
    ),
  },
  {
    path: "/movieDetail/:movieId",
    element: <MovieDetail />,
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
