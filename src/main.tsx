import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { ColorModeProvider } from "./contexts/ColorModeContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ColorModeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ColorModeProvider>
    </React.StrictMode>
)
