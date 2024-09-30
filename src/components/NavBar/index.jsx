import { useContext } from "react"
import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import UserContext from "../../providers/UserContext"

export const NavBar = () => {
    const { logoutUser } = useContext(UserContext)
    return (
        <div className={styles.navbar}>
            <img src={Logo} alt="Logo" />

            <button className="btnExit" onClick={() => logoutUser()}>Exit</button>
        </div>
    )
}