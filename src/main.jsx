import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TripPlanner from './components/Inputs/TripPlanner.jsx'
import Trip from './pages/Trip.jsx'
import MyTrips from './pages/MyTrips.jsx'
import Feed from './pages/Feed.jsx'
import Groups from './pages/Groups.jsx'

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
    path: '/trip/:tripId',
    element: <Trip />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/my-trips',
    element: <MyTrips />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/feed',
    element: <Feed />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/groups',
    element: <Groups />,
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
