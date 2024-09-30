import { RoutesMain } from "./routes/RoutesMain"
import "./styles/index.scss"

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {

    return (
        <>
            <RoutesMain />
            <ToastContainer />
        </>
    )
}

export default App
