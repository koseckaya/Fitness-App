import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./helpers/protectedroute";

import {
  Main,
  Error,
  Home,
  WorkoutPrograms,
  WorkoutVideos,
  About,
  Signup,
  Login,
  PrivacyPolicy,
  RecipePage,
  ProgramPage,
  Profile,
  Calculator,
} from "./routes";
import RecipesWrapper from "./routes/Recipes/RecipesWrapper";

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
        path: "calculator",
        element: <Calculator />,
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
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
