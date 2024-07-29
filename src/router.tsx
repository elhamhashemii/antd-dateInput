import { createBrowserRouter } from "react-router-dom";
import FeaturesPage from "./pages/FeaturesPage";
import NotFoundPage from "./pages/notFound";
import AntdDateInput from "./pages/root";
import Layout from "./layout";
import DocsPage from "./pages/DocsPage";

const router = createBrowserRouter([
    // Dashboard Layout Here
    {
        path: '',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            { path: "/", element: <AntdDateInput /> },
            { path: "/features", element: <FeaturesPage /> },
            { path: "/docs", element: <DocsPage /> },
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