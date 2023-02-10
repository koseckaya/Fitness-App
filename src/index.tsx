import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PrivacyPolicy } from './routes/PrivacyPolicy';
import {
  Main, Error, Home, WorkoutPrograms,
  WorkoutVideos, Recipes, Store, About,
  Signup, Login
} from "./routes";
import './styles/index.scss'
import { UserProvider } from './components/utils/contexts';

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
        path: "programs",
        element: <WorkoutPrograms />,
        },
      {
        path: "videos",
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
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
