import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Registration from "./pages/Registration";
import EventsPage from "./pages/EventsPage";

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
      {
        path: "/events",
        element: <EventsPage />,
      },
    ],
  },
]);

export default router;
