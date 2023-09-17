import React from "react";
import {
  Header,
  Body,
  AboutUs,
  ContactUS,
  Error,
  Cart,
  RestaurantMenu,
  CarouselRestaurant,
} from "./index";

import useOnlineStatus from "../utils/useOnlineStatus";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <Header onlineStatus={onlineStatus} />
      <Outlet context={onlineStatus} />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/carouselRestaurant/:entityID",
        element: <CarouselRestaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
