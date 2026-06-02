import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(0);
    const [receiverUser, setReceiverUser] = useState(null);

    return <AuthContext.Provider value={{user, setUser, loading, setLoading, account, setAccount, balance, setBalance, receiverUser, setReceiverUser}}>
        {children}
    </AuthContext.Provider>

}