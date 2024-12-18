import { createBrowserRouter } from "react-router";

import Home from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import Cart from "@/pages/Cart/Cart";

export const router = createBrowserRouter([

    { path: "/", element: <Home />, },
    { path: "/login", element: <Login />, },
    { path: "/signup", element: <Signup />, },
    { path: "/cart", element: <Cart />, },
]);