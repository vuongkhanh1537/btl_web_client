import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/Admin/AdminPage";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <HomePage/>
//     },
// ])
const router = createBrowserRouter([
   
    {
        path: "/",
        element: <HomePage />,
        
        
    },
    {
        path: "/*",
        element: <AdminPage />
    }
])

export default router;