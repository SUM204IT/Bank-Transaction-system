import { createBrowserRouter } from "react-router";
import RegisterPage from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import Protected from "./features/auth/components/Protected";
import Home from "./features/auth/pages/Home";
import LoginProtected from "./features/auth/components/LoginProtected";
import CreateAccount from "./features/auth/pages/CreateAccount";
import MyAccount from "./features/auth/pages/MyAccount";
import ProtectedCreateAccount from "./features/auth/components/ProtectedCreateAccount";
import TransferMoney from "./features/auth/pages/TransferMoney";

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
    },
    {
        path: "/create-account",
        element: <ProtectedCreateAccount><CreateAccount/></ProtectedCreateAccount>
    },
    {
        path: "/my-account",
        element: <Protected><MyAccount/></Protected>
    },
    // {
    //     path: "/transfer-money",
    //     element: <Protected><TransferMoney/></Protected>
    // }
])