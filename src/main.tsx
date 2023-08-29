import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { ColorModeProvider } from "./contexts/ColorModeContext.tsx"
import { ReviewProvider } from "./contexts/ReviewContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ColorModeProvider>
            <ReviewProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReviewProvider>
        </ColorModeProvider>
    </React.StrictMode>
)
