import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Dashboard from './assets/pages/Dashboard/index.jsx'
import About from './assets/pages/About/index.jsx'
import Portfolio from './assets/pages/Portfolio/index.jsx'
import Kontak from './assets/pages/Kontak/index.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Dashboard/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/portfolio',
        element: <Portfolio/>
      },
      {
        path: '/kontak',
        element: <Kontak/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
