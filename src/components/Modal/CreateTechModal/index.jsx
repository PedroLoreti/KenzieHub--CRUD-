import { useForm } from "react-hook-form"
import { IoMdClose } from "react-icons/io";
import styles from "./style.module.scss"

export const CreateTechModal = ({ setIsOpenCreate, createTech }) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        createTech(data)
        setIsOpenCreate(false)
    }
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <h1 className="title2">Register Technology</h1>
                    <button className="btnIcon" onClick={() => setIsOpenCreate(false)}><IoMdClose size={20}/></button>
                </div>

                <form className={styles.modalForm}>
                    <label className="headline" htmlFor="tile">Name</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Technology name"
                        {...register("title")} 
                        className={`${styles.inputTech} inputModal`}/>

                    <label className="headline" htmlFor="status">Select status</label>

                    <select className={`${styles.inputStatus} inputModal`} id="status" {...register("status")}>
                        <option value="Iniciante">Beginner</option>
                        <option value="Intermediário">Intermediary</option>
                        <option value="Avançado">Advanced</option>
                    </select>

                    <button onClick={handleSubmit(onSubmit)}>Register Technology</button>
                </form>
            </div>
        </div>
    )
}