import React, { ReactNode, useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "./App";
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
} from "./routes";
import RecipesWrapper from "./routes/Recipes/RecipesWrapper";
import "./styles/index.scss";
import {
  ThemeProvider,
  UserContext,
  UserProvider,
} from "./components/utils/contexts";
import { Calculator } from "./routes/Calculator";
import { Profile } from "./routes/Profile";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return <Navigate to='/' />;
  }
  return <>{children}</>;
};

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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
