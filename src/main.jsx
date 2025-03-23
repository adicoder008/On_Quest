import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TripPlanner from './components/Inputs/TripPlanner.jsx'
import Trip from './pages/Trip.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/TripPlanner',
    element: <TripPlanner />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/Events',
    element: <Trip />,
    errorElement: <div>Not found</div>,
  },
  // {
  //   path: '/',
  //   element: <App />,
  //   errorElement: <div>Not found</div>,
  // },
  // {
  //   path: '/',
  //   element: <App />,
  //   errorElement: <div>Not found</div>,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/> {/*we referreed the entry points to reactRouter */}
  </StrictMode>,
)
