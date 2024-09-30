import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import Logo from "../../assets/Logo.svg"
import { useContext } from "react"
import UserContext from "../../providers/UserContext"
import styles from "./style.module.scss"

export const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const { registerUser } = useContext(UserContext)

    const navigate = useNavigate()

    const watchPassword = watch("password");

    const onSubmit = (data) => {
        const { confirmPassword, ...userData } = data
        registerUser(userData)
    }

    const handleBackToLogin = () => {
        navigate("/")
    };

    return (
        <main className={styles.mainContainer}>
            <div>
                <img src={Logo} alt="Logo Kenzie Hub" />
                <button className={styles.btnBack} onClick={handleBackToLogin}>Voltar</button>
            </div>

            <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>

                <h1 className="title1">Crie sua conta</h1>
                <p className={`${styles.subTitle} headline`}>Rapido e grátis, vamos nessa</p>

                <label className="headline" htmlFor="name">Name</label>

                {/* ============Nome=========== */}
                <input
                    className={`${errors?.email && "inputError"} inputModal`}
                    type="text"
                    id="name"
                    placeholder="Digite aqui seu nome"
                    {...register("name", { required: true })}
                />

                {errors?.name?.type === "required" && <p className={styles.errorRequired}>Name is required.</p>}

                {/* ============Email=========== */}
                <label className="headline" htmlFor="email">Email</label>

                <input
                    className={`${errors?.email && "inputError"} inputModal`}
                    type="email"
                    id="email"
                    placeholder="Digite aqui seu email"
                    {...register("email", { required: true })}
                />

                {errors?.email?.type === "required" && <p className={styles.errorRequired}>Email is required.</p>}

                {/* ============Password=========== */}
                <label className="headline" htmlFor="password">Password</label>

                <input
                    className={`${errors?.email && "inputError"} inputModal`}
                    type="password"
                    id="password"
                    placeholder="Digite aqui sua senha"
                    {...register("password", { required: true })}
                />
                {errors?.password?.type === "required" && <p className={styles.errorRequired}>Password is required.</p>}

                {/* ============Confirm Password=========== */}
                <label className="headline" htmlFor="confirmPassword">Confirm Password</label>

                <input
                    className={`${errors?.email && "inputError"} inputModal`}
                    type="password"
                    id="confirmPassword"
                    placeholder="Digite novamente sua senha"
                    {...register("confirmPassword", { required: true, validate: (value) => value === watchPassword })}
                />

                {errors?.confirmPassword?.type === "required" && <p className={styles.errorRequired}>Confirm password is required.</p>}
                {errors?.confirmPassword?.type === "validate" && <p className={styles.errorRequired}>Passwords does not match.</p>}

                {/* ============Bio=========== */}
                <label className="headline" htmlFor="bio">Bio</label>

                <input
                    className={`${errors?.email && "inputError"} inputModal`}
                    type="text"
                    id="bio"
                    placeholder="Fale sobre você"
                    {...register("bio", { required: true })}
                />

                {errors?.bio?.type === "required" && <p className={styles.errorRequired}>Bio is required.</p>}

                {/* ============Contact=========== */}
                <label className="headline" htmlFor="contact">Contact</label>

                <input
                    className={`${errors?.email && "inputError"} inputModal`}
                    type="text"
                    id="contact"
                    placeholder="Opção de contato"
                    {...register("contact", { required: true })}
                />

                {errors?.contact?.type === "required" && <p className={styles.errorRequired}>Contact is required.</p>}

                <label className="headline" htmlFor="selectModule">Module</label>


                <select
                    id="selectModule"
                    className={`${errors?.email && "inputError"} inputModal`}
                    {...register("course_module", { validate: (value) => value !== "0" })}>
                    <option value="0">Select Module</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">First Module</option>
                    <option value="Segundo módulo (Frontend Avançado">Second Module</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Third Module</option>
                    <option value="Quarto módulo (Backend Avançado)">Fourth module</option>
                </select>

                {errors?.course_module?.type === "validate" && <p className={styles.errorRequired}>Module is required.</p>}

                <button type="submit" className={styles.btnRegister}>Cadastrar</button>
            </form>
        </main >
    )
}