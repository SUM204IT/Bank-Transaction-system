import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { register, login, getMe, logout, createAccount, getAccount, getBalance, createTransaction } from "../services/auth.api";

export const useAuth = () => {

    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading, account, setAccount, balance, setBalance} = context;

    const handleRegister = async ({username, email, password}) => {
        setLoading(true);
        try {
            const data = await register({username, email, password});
            if(data?.user){
                setUser(data.user);
            }
            return true;
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const handleLogin = async ({email,password}) => {
        setLoading(true);

        try{
            const data = await login({email, password});
            if(data?.user){
                setUser(data.user);
            }
            return true;
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const handleLogout = async () => {
        setLoading(true);
        try {
            await logout();
            setUser(null);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
            return true;
        }
    } 

    const handleCreateAccount = async () => {
            setLoading(true);
            try {
                const data = await createAccount();
                setAccount(data.account);
    
                return true;
    
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false);
            }
        }

        const handleCreateTransaction = async function ({toAccount, amount}) {
            try {
                const data = await createTransaction({toAccount, amount});

                return true;
            } catch (error) {
                console.log(error);
            }
        }

    useEffect(() => {

        const getAndSetUser = async () => {
            try {
                const data = await getMe();
                if(data?.user){
                    setUser(data.user);
                }
            } catch (error) {
                console.log(error)
            } finally{
                setLoading(false)
            }
        }

        const getAndSetAccount = async () => {
            try {
                const data = await getAccount();
                // console.log();
                if(data?.account){
                    setAccount(data.account[0]);
                }
            } catch (error) {
                console.log(error)
            }
        }

        const getAndSetBalance = async () => {
            try {
                const data = await getBalance();
                if(data?.balance){
                    setBalance(data.balance);
                }
            } catch (error) {
                console.log(error);
            }
        }

        getAndSetUser();
        getAndSetAccount();
        getAndSetBalance();

    }, [])


    return {user, loading, handleRegister, handleLogin, handleLogout, handleCreateAccount, handleCreateTransaction, account, balance}

}