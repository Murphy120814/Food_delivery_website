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
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
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
