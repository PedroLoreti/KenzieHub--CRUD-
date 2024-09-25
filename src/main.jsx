import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { TechProvider } from "./providers/TechContext.jsx"
import { UserProvider } from "./providers/UserContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
    <TechProvider>
        <App />
      </TechProvider>
    </UserProvider>
  </StrictMode>,
)
