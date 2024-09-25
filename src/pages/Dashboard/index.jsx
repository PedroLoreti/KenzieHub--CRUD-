import { Header } from "../../components/Header"
import { NavBar } from "../../components/NavBar"
import { TechList } from "../../components/TechList"



export const Dashboard = () => {
    return (
        <>
            <NavBar />
            <Header />
            <main>
                <TechList />
            </main>
        </>
    )
}