import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                { path: "home", element: <HomePage /> },
                { path: "projects", element: <ProjectsPage /> },
                { path: "aboutme", element: <h1>About Me</h1> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
