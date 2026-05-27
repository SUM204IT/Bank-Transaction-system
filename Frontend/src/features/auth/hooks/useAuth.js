import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { register, login, getMe } from "../services/auth.api";

export const useAuth = () => {

    const conetxt = useContext(AuthContext);
    const { user, setUser, loading, setLoading} = conetxt;

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

        getAndSetUser();

    }, [])


    return {user, loading, handleRegister, handleLogin}

}