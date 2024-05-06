import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Login, Browse, MovieDetail, ErrorPage, Shimmer } from '.';

const GptSearch = lazy(() => import('./GptSearch'));
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
  {
    path: '/search',
    // element: <GptSearch />,
    element: (
      <Suspense fallback={<Shimmer />}>
        <GptSearch />,
      </Suspense>
    ),
  },
  {
    path: '/movieDetail/:movieId',
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
