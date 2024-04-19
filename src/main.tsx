import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from "./components/AboutUs.tsx";
import Movies from "./components/Movies.tsx";

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/about', element: <AboutUs /> },
    { path: '/movies', element: <Movies /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
