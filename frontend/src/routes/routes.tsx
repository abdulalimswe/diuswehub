import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { customerPaths } from "./user.routes";
import { homePaths } from "./home.routes";
import SidebarLayout from "../components/layout/SidebarLayout";
import EventDetails from "../pages/event/EventDetails";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import VerificationEvent from "../pages/order/VerificationOrder";
import MainLayout from "../components/layout/MainLayout";
import CPSWE from "../pages/competitiveProgramming/cpswe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Apply Navbar once at the root
    children: [
      ...routesGenerator(homePaths),
      { path: "event/:id", element: <EventDetails /> },
      { path: "post-event/verify", element: <VerificationEvent /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <SidebarLayout />
      </ProtectedRoute>
    ),
    children: routesGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <SidebarLayout />
      </ProtectedRoute>
    ),
    children: routesGenerator(customerPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cpswe",
    element: <CPSWE />
  },
]);

export default router;
