import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Loading from './ReactApps/Loading'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from './ReactApps/Game';
import NotFound from './ReactApps/NotFound';

const router = createBrowserRouter([
  {path : "/",element: <Loading/>},
  {path : "/game", element: <Game />},
  {path : "*" , element: <NotFound />}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
