import React from "react";
import { Home } from "./pages/Home/Home.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";
import 'animate.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About/About.jsx";
import { Menu } from "./pages/Menu/Menu.jsx";
import { CheckOut } from "./pages/CheckOut/CheckOut";
import { Cart } from "./pages/Cart/Cart.jsx";
import { DetailsMeal } from "./pages/DetailsMeal/DetailsMeal";
import { LocationsMap } from "./pages/LocationsMap/LocationsMap";
import { LayOut } from "./Components/LayOut/LayOut";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Error } from "./pages/Error/Error";
import { LanguageChangeContext } from "./Store/LanguageChangeContext";

export const App = () => {
  const { language } = LanguageChangeContext();
  const dir = language === 'en' ? 'ltr' : 'rtl' ;

  const routes = createBrowserRouter([
  {
      path: "",
      element: <LayOut />, errorElement : <Error/>,
        children: [
          { path: "", element: <Home />, index: true },
          { path: "about", element: <About /> },
          { path: "menu", element: <Menu /> },
          { path: "cart", element: <Cart /> },
          { path: "checkOut", element: <CheckOut /> },
          { path: "DetailsMeal/:id", element: <DetailsMeal /> },
          { path: "LocationsMap", element: <LocationsMap /> },
 ] }  ],
);

const queryClient = new QueryClient();

  return (
    <div dir={dir}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}>
        </RouterProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );

};
export default App;
