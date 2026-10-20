import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
import Shopnow from "./pages/Shopnow";
import { CartProvider } from "./constants/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/contact", Component: Contact },
      { path: "/blog", Component: Blog },
      { path: "/favorite", Component: Favorite },
      { path: "/basket", Component: Basket },
      { path: "/profile", Component: Profile },
      { path: "/shopnow", Component: Shopnow },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);