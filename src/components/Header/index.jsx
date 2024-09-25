import { useContext } from "react"
import UserContext from "../../providers/UserContext"
import styles from "./style.module.scss"

export const Header = () => {
    const { user } = useContext(UserContext)
    return (
        <header className={styles.header}> 
            <h1 className="title1">Olá {user.name}</h1>

            <p className="headline">{user.course_module}</p>
        </header>
    )
}