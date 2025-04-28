import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from './routes/Dashboard.tsx';
import Login from './routes/Login.tsx';
import Signup from './routes/signup.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    
  },
  {
    path: "/signup",
    element: <Signup/>,
    
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
