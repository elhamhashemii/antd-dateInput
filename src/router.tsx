import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/root";
import NotFoundPage from "./pages/notFound";

const router = createBrowserRouter([
    // Dashboard Layout Here
    {
        path: '',
        // element: <DashboardLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { path: "", element: <HomePage /> },
            // { path: "/test", element: <TestPage /> },
        ]
    },
    // {
    //     path: "/login",
    //     element: <LoginPage />,
    // },
    // {
    //     path: "/omg",
    //     element: <TestPage />,
    // },
]);

export default router;