import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import LoadingScreen from "./Loading";

const LoginProtected = ({children}) => {
  const { user, loading } = useAuth();

  if(loading) {
    return (<main><LoadingScreen/></main>);
  }

  if (user) {
    return <Navigate to={"/"} />
  }

  return children
}

export default LoginProtected;
