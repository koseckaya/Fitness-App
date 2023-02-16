import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
} from "react-router-dom";
import { App } from './App';

import {
  Main, Error, Home, WorkoutPrograms,
  WorkoutVideos, Store, About,
  Signup, Login, PrivacyPolicy, RecipePage, ProgramPage
} from "./routes";
import RecipesWrapper from './routes/Recipes/RecipesWrapper';
import './styles/index.scss'
import { UserProvider } from './components/utils/contexts';
import { Profile } from './routes/Profile';
export const router = createBrowserRouter([
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
        path: "programs/:programId",
        element: <ProgramPage />,
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
        path: "recipes/:categoryId/:recipeId",
        element: <RecipePage />,
      },
      {
        path: "recipes/:categoryId",
        element: <RecipesWrapper />,
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
        path: "profile",
        element: <Profile />,
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
      <App />
    </UserProvider>
  </React.StrictMode>
);
