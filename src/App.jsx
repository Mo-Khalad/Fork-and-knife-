import React from "react";
import { Home } from "./pages/Home/Home.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About/About.jsx";
import { Menu } from "./pages/menu/menu.jsx";
import { CheckOut } from "./pages/CheckOut/CheckOut.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import { DetailsMeal } from "./pages/DetailsMeal/DetailsMeal.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import { LayOut } from "./Components/LayOut/LayOut.jsx";

export const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { path: "", element: <Home /> , index:true },
        { path: "about", element: <About /> },
        { path: "menu", element: <Menu /> },
        { path: "cart", element: <Cart/> },
        { path: "checkOut", element: <CheckOut /> },
        { path: "DetailsMeal", element: <DetailsMeal /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
};
export default App;
