import { createContext, useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { api } from "../services/api";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const [techsList, setTechsList] = useState([])
    const [editingTech, setEditingTech] = useState({})

    const createTech = async (techData) => {
        try {
            const token = localStorage.getItem("token")

            const response = await api.post(
                `/users/techs`,
                techData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );


            const newTech = response.data
            const newListTechs = [...techsList, newTech]

            setTechsList(newListTechs)

        } catch (error) {
            console.log("Erro ao criar tecnologia:", error);
        }
    }

    const deleteTech = async (deletingId) => {
        try {
            const token = localStorage.getItem("token")

            await api.delete(`/users/techs/${deletingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const newListTechs = techsList.filter(tech => tech.id !== deletingId)
            setTechsList(newListTechs)

        } catch (error) {
            console.log(error)
        }
    }

    const techUpdate = async (techData) => {
        try {
            const token = localStorage.getItem("token")

            const { data } = await api.put(`/users/techs/${editingTech.id}`, techData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            })
            const newListTechs = techsList.map(tech => tech.id === editingTech.id ? data : tech)
            setTechsList(newListTechs)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        if (user && user.techs) {
            setTechsList(user.techs || [])
        }

    }, [user])


    return (
        <TechContext.Provider value={{ techsList, createTech, deleteTech, editingTech, setEditingTech, techUpdate }}>
            {children}
        </TechContext.Provider>
    )
}
