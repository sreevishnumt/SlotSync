import { useState } from 'react'

import './App.css'
import Home from './Components/Home'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import Dashboard from './Components/Dashboard';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element:<Register/>,
  },
  {
    path: "/forgot-password",
    element:<ForgotPassword/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
