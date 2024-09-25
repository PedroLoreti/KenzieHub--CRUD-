import { useContext, useState } from "react"
import { TechCard } from "./TechCard"
import { TechContext } from "../../providers/TechContext"
import { CreateTechModal } from "../Modal/CreateTechModal"
import { EditTechModal } from "../Modal/EditTechModal"
import { FaPlus } from "react-icons/fa6"
import styles from "./style.module.scss"

export const TechList = () => {

    const { techsList, createTech } = useContext(TechContext)
    const [isOpenCreate, setIsOpenCreate] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)

    return (
        <>
            <div className={styles.description}>
                <p className="title2">Tecnologias</p>
                <button  className="btnCreate" onClick={() => setIsOpenCreate(true)}><FaPlus /></button>
            </div>

            <ul className={styles.techList}>
                {techsList.map((tech) => (
                    <TechCard key={tech.id} tech={tech} setIsOpenEdit={setIsOpenEdit} />
                ))}
            </ul>

            {isOpenCreate ? <CreateTechModal setIsOpenCreate={setIsOpenCreate} createTech={createTech}></CreateTechModal> : null}
            {isOpenEdit ? <EditTechModal setIsOpenEdit={setIsOpenEdit}></EditTechModal> : null}
        </>
    )
}