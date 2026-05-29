import { createBrowserRouter } from "react-router";
import RegisterPage from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import Protected from "./features/auth/components/Protected";
import Home from "./features/auth/pages/Home";
import LoginProtected from "./features/auth/components/LoginProtected";

export const router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/",
        element: <Protected><Home/></Protected>
    },
    {
        path: "/login",
        element: <LoginProtected><Login/></LoginProtected>
    }
])