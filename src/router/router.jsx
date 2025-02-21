import {
    createBrowserRouter,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="text-white">Hello world!</div>,
    },
]);
export default router