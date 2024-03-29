import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Registration from "./pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
