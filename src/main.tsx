import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Favorite from './pages/Favorite';
import Basket from './pages/Basket';
import Profile from './pages/Profile';
import Shopnow from './pages/Shopnow';
import FeaturedProducts from './pages/FeaturedProducts';
import NewArrival from './pages/NewArrival';
import Bestseller from './pages/Bestseller';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "/about",
        Component: About,
      },
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
      
    ]
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);