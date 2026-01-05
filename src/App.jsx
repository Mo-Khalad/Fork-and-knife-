import React from "react";
import { Home } from "./pages/Home/Home.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";
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
import { MainError } from "./pages/Error/MainError";
import { NotFound } from "./pages/Error/NotFound";
import { ToastContainerSetting } from './Components/ToastContainerSetting'
import { LanguageChangeContext } from "./Store/LanguageChangeContext"
import { successfullyDone } from './Logic/Logic'

export const App = () => {
  const { language } = LanguageChangeContext();
  const dir = language === 'en' ? 'ltr' : 'rtl' ;
  
  const routes = createBrowserRouter([
  {
      path: "/",
      element: <LayOut />,
       errorElement : <MainError/> ,
        children: [
          { path:'' , index:true , element: <Home /> },
          { path: "about", element: <About /> },
          { path: "menu", element: <Menu /> },
          { path: "cart", element: <Cart /> },
          { path: "checkOut", element: <CheckOut /> },
          { path: "DetailsMeal/:id", element: <DetailsMeal /> },
          { path: "LocationsMap", element: <LocationsMap /> },
          { path: "*", element:  <NotFound/> },
 ] 
  }
],

);

const queryClient = new QueryClient();

  return (
   <>
    <div dir={dir} className={language === 'ar' ? 'cairo-font' :''}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}>
        </RouterProvider>
        <ReactQueryDevtools />
        <ToastContainerSetting/>
      </QueryClientProvider>
    </div> 
   </>   
  );

};
export default App;
