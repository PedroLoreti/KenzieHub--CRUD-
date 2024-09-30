import { useContext, useState } from "react"
import Logo from "../../assets/Logo.svg"
import { useForm } from "react-hook-form"
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss"
import UserContext from "../../providers/UserContext";

export const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { loginUser } = useContext(UserContext)

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleRegisterRedirect = () => {
        navigate("/register")
    };

    return (
        <main className={styles.mainContainer}>
            <img src={Logo} alt="Logo Kenzie Hub" />

            <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title1">Login</h1>

                <label className="headline" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite aqui seu email"
                    {...register("email", { required: true })}
                    className={`${styles.inputLogin} ${errors?.email && "inputError"} inputModal`}
                />

                {errors?.email?.type === "required" && <p className={styles.errorRequired}>Email is required.</p>}

                <label className="headline" htmlFor="password">Password</label>
                <div className={styles.containerPassword}>
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite aqui sua senha"
                        {...register("password", { required: true })}
                        className={`${styles.inputLogin} ${errors?.password && "inputError"} inputModal`}
                    />

                    <button className={`${styles.btnPassword} btnIcon`} type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
                    </button>
                </div>

                {errors?.password?.type === "required" && <p className={styles.errorRequired}>Password is required.</p>}


                <button className={styles.btnLogin} type="submit">Entrar</button>

                <p className={`${styles.description} headline bold`}>Ainda não possui uma conta?</p>

                <button className={styles.btnRegister} onClick={handleRegisterRedirect}>Cadastrar</button>
            </form>
        </main>
    )
}