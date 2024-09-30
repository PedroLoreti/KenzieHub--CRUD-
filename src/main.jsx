import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { TechProvider } from "./providers/TechContext.jsx"
import { UserProvider } from "./providers/UserContext.jsx"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
          <App />
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
