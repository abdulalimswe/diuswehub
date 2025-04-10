import UserDashboard from "../pages/user/UserDashboard";
import {
  UserOutlined,
  DashboardOutlined,
  QuestionCircleOutlined,
  AppstoreOutlined,

} from "@ant-design/icons";
import UserProfile from "../pages/user/UserProfile";
import HelpAndSupport from "../pages/user/HelpAndSupport";
import EventsManagement from "../pages/user/UserEventsManagement";

export const customerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
    icon: <DashboardOutlined />,
  },
  {
    name: "My Profile",
    path: "profile",
    element: <UserProfile />,
    icon: <UserOutlined />,
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
    ],
  },
  {
    name: "Help & Support",
    path: "help-support",
    element: <HelpAndSupport />,
    icon: <QuestionCircleOutlined />,
  },
];
