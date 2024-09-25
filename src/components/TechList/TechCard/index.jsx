import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./style.module.scss"

export const TechCard = ({ tech, setIsOpenEdit }) => {

    const { deleteTech, setEditingTech } = useContext(TechContext)

    return (
        <li className={styles.card}>
            <h2 className="title2">{tech.title}</h2>
            <div className={styles.description}>
                <p className="headline">{tech.status}</p>
                <div>
                    <button className="btnIcon" onClick={() => { setIsOpenEdit(true); setEditingTech(tech); }}><GoPencil size={17} /></button>
                    <button className="btnIcon" onClick={() => deleteTech(tech.id)}><FaRegTrashAlt size={17} /></button>
                </div>
            </div>
        </li>
    )
}