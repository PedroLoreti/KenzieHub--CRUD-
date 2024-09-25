import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"

export const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <img src={Logo} alt="Logo" />

            <button className="btnExit">Exit</button>
        </div>
    )
}