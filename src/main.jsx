import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorNotFound from './Pages/ErrorNotFound';
import ProductPage from './Pages/products';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Word</div>,
    errorElement: <ErrorNotFound/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
