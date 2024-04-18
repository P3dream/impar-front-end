import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/Login";
import { HomePage } from "../pages/home/home";
import Register from "../pages/login/Register";

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: 
            <Login/>,
        },
        {
            path: "/home",
            element: <HomePage/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}