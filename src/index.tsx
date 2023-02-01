import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  Main, Error, Home, WorkoutPrograms,
  WorkoutVideos, Recipes, Store, About
} from "./routes";
import './styles/index.scss'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
       {
        path: "/",
        element: <Home />,
        },
      {
        path: "workoutPrograms",
        element: <WorkoutPrograms />,
        },
      {
        path: "workoutVideos",
        element: <WorkoutVideos />,
        },
       {
        path: "recipes",
        element: <Recipes />,
        },
       {
        path: "store",
        element: <Store />,
        },
       {
        path: "about",
        element: <About />,
      },
    ],
  },

]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

