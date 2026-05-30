import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import LoadingScreen from "./Loading";

const ProtectedCreateAccount = ({children}) => {
  const { account, loading } = useAuth();

  if(loading) {
    return (<main><LoadingScreen/></main>);
  }

  if (account) {
    return <Navigate to={"/my-account"} />
  }

  return children
}

export default ProtectedCreateAccount;
