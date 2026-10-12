import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
import Shopnow from "./pages/Shopnow";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/favorite",
        Component: Favorite,
      },
      {
        path: "/basket",
        Component: Basket,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/shopnow",
        Component: Shopnow,
      },
    ],
  },
]);

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
