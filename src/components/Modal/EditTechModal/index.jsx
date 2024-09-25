import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../../providers/TechContext"
import { IoMdClose } from "react-icons/io";
import styles from "./style.module.scss"

export const EditTechModal = ({ setIsOpenEdit }) => {

    const { editingTech, setEditingTech, techUpdate } = useContext(TechContext)

    const { register, handleSubmit } = useForm({
        values: {
            status: editingTech.status,
        }
    })

    const onSubmit = (data) => {
        techUpdate(data)
        setIsOpenEdit(false)
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <h1 className="title2">Technology Details</h1>
                    <button className="btnIcon" onClick={() => { setIsOpenEdit(false); setEditingTech(null) }}><IoMdClose size={20} /></button>
                </div>

                <form className={styles.modalForm}>
                    <label className="headline" htmlFor="tile">Name</label>
                    <input
                        type="text"
                        id="title"
                        defaultValue={editingTech.title}
                        readOnly
                        disabled
                        className={`${styles.inputTech} inputModal`}
                    />

                    <label className="headline" htmlFor="status">Status</label>

                    <select className={`${styles.inputStatus} inputModal`} id="status" {...register("status")}>
                        <option value="Iniciante">Beginner</option>
                        <option value="Intermediário">Intermediary</option>
                        <option value="Avançado">Advanced</option>
                    </select>

                    <button onClick={handleSubmit(onSubmit)}>Salvar Alterações</button>
                </form>
            </div>
        </div>
    )
}