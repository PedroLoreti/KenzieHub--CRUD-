import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const loginUser = async (email, password) => {
        try {
            const response = await api.post("/sessions", { email, password });

            localStorage.setItem("token", response.data.token);

            setUser(response.data.user);

        } catch (error) {
            console.log("Erro ao fazer login:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        const fixedEmail = "johndoe@email.com";
        const fixedPassword = "123456";
        loginUser(fixedEmail, fixedPassword);

    }, []);



    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;