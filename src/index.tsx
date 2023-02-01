import React from 'react';
import ReactDOM from 'react-dom/client';
import { Item } from './components/Item';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Main, Error, Trainings } from "./routes";
import { WorkoutPrograms } from './routes/WorkoutPrograms';
import { WorkoutVideos } from './routes/WorkoutVideos';
import { Recipes } from './routes/Recipes';
import { Store } from './routes/Header/Store';
import { About } from './routes/About';
import './styles/index.scss'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
      children: [
      {
        path: "trainings",
        element: <Trainings />,
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

