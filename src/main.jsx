import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import ErrorPage from "./components/ErrorPage.jsx/ErrorPage.jsx";
import MoreInfo from "./components/MoreInfo/MoreInfo.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/product",
        loader: () => fetch("https://fakestoreapi.com/products"),
        element: <Products />,
      },
      {
        path: "/product/:productId",
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.productId}`),
        element: <MoreInfo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
