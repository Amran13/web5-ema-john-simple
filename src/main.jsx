import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Order from './Components/Order/Order.jsx'
import OrderSummery from './Components/Order-Summery/OrderSummery.jsx'
import Login from './Components/Login/Login.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Provider from './Components/Provider/Provider.jsx'
import AuthProvider from './Components/Provider/AuthProvider.jsx'
import Register from './Components/Register/Register.jsx'
import Private from './Components/Protected/Private.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/order',
        element: <Order></Order>
      },
      {
        path: '/order-summery',
        element: <Private> <OrderSummery></OrderSummery> </Private>,
      },
      {
        path: '/cart',
        element: <Private> <Cart></Cart> </Private>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '*',
        element: <div>Not Found</div>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
