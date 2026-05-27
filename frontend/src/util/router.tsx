import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Catallog from "../pages/Catallog";
import Contact from "../pages/Contact";
import App from "../App";
import Admin from "../pages/admin-page/Admin";
import AdminDashboard from "../pages/admin-page/pages/Admin-dashboard";
import Products from "../pages/admin-page/pages/products/Products";
import Statistics from "../pages/admin-page/pages/Statistics";
import Clients from "../pages/admin-page/pages/Clients";
import Orders from "../pages/admin-page/pages/Orders";
import Settings from "../pages/admin-page/pages/Settings";
import Product_Info from "../pages/admin-page/pages/products/Product_Info";

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
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      { path: "products/new", element: <Product_Info /> },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
