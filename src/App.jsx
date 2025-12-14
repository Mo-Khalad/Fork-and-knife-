import React from "react";
import { Home } from "./pages/Home/Home.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About/About.jsx";
import { Menu } from "./pages/Menu/Menu.jsx";
import { CheckOut } from "./pages/CheckOut/CheckOut.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import { DetailsMeal } from "./pages/DetailsMeal/DetailsMeal.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import { LayOut } from "./Components/LayOut/LayOut.jsx";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
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
const queryClient = new QueryClient() 
  return  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes}></RouterProvider>;
  </QueryClientProvider>  
  };
export default App;
