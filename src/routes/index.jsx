import { createBrowserRouter, Outlet } from "react-router-dom";
import  HomePage from '../pages/HomePage';
import LoginPage from "../pages/LoginPage";
import HomeLayout from "../components/HomeLayout";
const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: <HomeLayout><Outlet/></HomeLayout>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about",
                element: <div>About Page</div>
            }
        ]
    },
    {
        path: "/admin",
        element: <div>Admin Page</div>
    }
])

export default router;