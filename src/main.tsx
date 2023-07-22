import React from "react";
import ReactDOM from "react-dom/client";
import App from "./LandingPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./components/header.tsx";
import Shop from "./Shop.tsx";
import GamePage from "./GamePage.tsx";
import Cart from "./Cart.tsx";
import "./i18n.ts";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
