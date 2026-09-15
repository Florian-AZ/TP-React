import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Outlet } from "react-router";
import Header from "./components/Header.tsx";
import Accueil from './pages/Accueil.tsx';
import Annuaire from './pages/Annuaire.tsx';
import AccueilUser from './pages/AccueilUser.tsx';
import "./index.css";

const Layout =() => (
    <>
      <Header />
      <Outlet />
    </>
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
    {
      path: '/',
      element: <Accueil />
    },
    {
      path: '/Annuaire',
      element: <Annuaire />
    },
    {
      path: '/user/:id',
      element: <AccueilUser />
    },
    ]
  }

]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);