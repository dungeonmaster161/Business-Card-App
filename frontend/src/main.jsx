import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './routes/root.jsx'
import ErrorPage from './routes/error-page.jsx'
import './index.css'
import ManageBusinessCards from './routes/ManageBusinessCards.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import CreateBusinessCard from './routes/CreateBusinessCard.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element: <App />
      },
      {
        path:"allBusinessCards",
        element: <ManageBusinessCards />
      }
    ]
  },
  // {
  //   path:"createBusinessCard",
  //   element: <CreateBusinessCard />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
