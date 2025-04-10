import AdminDashboard from "../pages/admin/AdminDashboard";
import {
  DashboardOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  TeamOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import EventsManagement from "../pages/admin/EventsManagement";
import ReqEventsManagement from "../pages/admin/ReqEventsManagement";
import UsersManagements from "../pages/admin/UsersManagements";
import AdminProfile from "../pages/admin/AdminProfile";
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
    icon: <DashboardOutlined />,
  },
  {
    name: "My Profile",
    path: "profile",
    element: <AdminProfile />,
    icon: <UserOutlined />,
  },
  {
    name: "Users",
    icon: <TeamOutlined />,
    children: [
      {
        name: "Users Managements",
        path: "users",
        element: <UsersManagements />,
        icon: <UserAddOutlined />,
      },
    ],
  },
  {
    name: "Events",
    icon: <AppstoreOutlined />,
    children: [
      {
        name: "Post Events",
        path: "post-events",
        element: <EventsManagement />,
        icon: <AppstoreOutlined />,
      },
      {
        name: "Request Events",
        path: "request-events",
        element: <ReqEventsManagement />,
        icon: <UnorderedListOutlined />,
      },
    ],
  },
];
