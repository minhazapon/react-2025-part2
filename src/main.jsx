import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Root from './Root';
import Props from './home file/Props';
import JP from './jsx props/JP';
import Event from './event handling/EventHandle';
import State from './useSate/State';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/props",
        element: <Props></Props>,
      },
      {
        path: "/jp",
        element: <JP></JP>,
      },
      {
        path: "/event",
        element: <Event></Event>,
      },
      {
        path: "/state",
        element: <State></State>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
