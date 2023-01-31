import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Item } from './components/Item';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Main, Error, Trainings } from "./routes";


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
    ],
  },

]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Item />
    <RouterProvider router={router} />
  </React.StrictMode>
);

