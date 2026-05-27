import { useState } from 'react'

import './App.css'
import Home from './Components/Home'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import AdminDashboard from './Pages/AdminDashboard';
import UserDashboard from './Pages/UserDashboard';
import UserHome from './Pages/UserHome';
import ServiceForm from './Pages/ServiceForm';
import UserProfile from './Pages/UserProfile';
import ServiceDetails from './Pages/ServiceDetails';
import CustomerCare from './Pages/CustomerCare';


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
    path:"/addashboard",
    element:<AdminDashboard/>
  },
  {
    path:"/usdashboard",
    element:<UserDashboard/>
  },
  {
    path:"/userhome",
    element:<UserHome/>
  },
  {
    path:"/serviceform",
    element:<ServiceForm/>
  },
  {
    path:"/profile",
    element:<UserProfile/>
  },
  {
    path:"/servicedetails",
    element:<ServiceDetails/>
  },
  {
    path:"/customercare",
    element:<CustomerCare/>
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
