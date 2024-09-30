import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()


    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    setUser(data);
                    navigate("/dashboard")
                } catch (error) {
                    console.log(error);
                    localStorage.removeItem("token");
                }
            }
        }
        loadUser()

    }, []);




    const registerUser = async (formData) => {
        try {
            const response = await api.post("/users", formData);
            toast.success("Usuário registrado com sucesso!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    color: "white",
                    backgroundColor: "#343B41",
                }
            });
            navigate("/");
        } catch (error) {
            toast.error("Erro ao registrar o usuário.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    color: "white",
                    backgroundColor: "#343B41",
                }
            });
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    const loginUser = async (email, password) => {
        try {
            const response = await api.post("/sessions", { email, password });

            localStorage.setItem("token", response.data.token);

            setUser(response.data.user);

            if (response.data.token) {
                navigate("/dashboard");
            }

        } catch (error) {
            console.log("Erro ao fazer login:", error.response?.data || error.message);
        }
    };

    const logoutUser = () => {
        localStorage.removeItem("token");
        setUser({});
        navigate("/")
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser, registerUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;