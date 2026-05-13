import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Catallog from "../pages/Catallog";
import Contact from "../pages/Contact";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "catallog",
        element: <Catallog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
