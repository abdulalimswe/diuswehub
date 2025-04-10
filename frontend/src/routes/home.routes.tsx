import About from "../pages/About";
import Contact from "../pages/Contact";
import HomePage from "../pages/home/HomePage";
import AllEvent from "../pages/event/AllEvent";
import CPSWE from "../pages/competitiveProgramming/cpswe";

export const homePaths = [
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    name: "All Featured",
    path: "all-events",
    element: <AllEvent />,
  },
  {
    name: "CP SWE",
    path: "cpswe",
    element: <CPSWE />,
  },
  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
];
