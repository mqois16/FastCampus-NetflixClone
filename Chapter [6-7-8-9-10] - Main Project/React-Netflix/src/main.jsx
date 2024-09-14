import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Landing from './pages/Landing'
import Browse from './pages/Browse'
import Watch from './pages/Watch/Index'
import Register from './pages/Register/Index'

const router = createBrowserRouter([
  {
    element: <Landing />,
    path: "/"
  },
  {
    element: <Browse />,
    path: "/browse"
  },
  {
    element: <Watch />,
    path: "/watch/:id"
  },
  {
    element: <Register />,
    path: "/register"
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
