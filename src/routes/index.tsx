import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/Login";
import { HomePage } from "../pages/home/home";

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
    ]);

    return (
        <RouterProvider router={router} />
    );
}