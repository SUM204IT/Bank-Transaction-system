import axios from "axios"

const api = axios.create({
    // baseURL:" https://bank-transaction-system-pm0h.onrender.com",
    baseURL:"http://localhost:5000",
    withCredentials: true
})

export async function register({username, email, password}) {

    try {

        const response = await api.post("/api/auth/register", {
            username, 
            email,
            password
        })
        return response.data

    } catch (error) {
        console.log("Error in register auth api::", error);
    }

}

export async function login({email, password}) {

    try {
        const response = await api.post("/api/auth/login", {
            email,
            password
        })

        return response.data;
    } catch (error) {
        console.log("Error in logging auth api::", error)
    }

}

export async function getMe() {

    try {
        const response = await api.get("/api/auth/profile");
        // console.log(response);

        return response.data;

    } catch (err) {
        console.log(err)
    }

}

export async function logout() {
    try {
        await api.get("/api/auth/logout");
    } catch (error) {
        console.log("Errorin logout api auth::", error);
    }
}

export async function createAccount() {
    try {
        const response = await api.post("/api/accounts/create");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getAccount() {
    try {
        const response = await api.get("/api/accounts/get-account");
        return response.data;       
    } catch (error) {
        console.log(error)
    }
}

export async function getBalance() {
    try {
        const response = await api.get("/api/accounts/balance");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}