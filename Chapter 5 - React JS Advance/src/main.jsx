import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Browse from './pages/Browse.jsx'

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/"
  },
  {
    element: <Browse />,
    path: "/browse"
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
