import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { ColorModeProvider } from "./contexts/ColorModeContext.tsx"
import { ReviewProvider } from "./contexts/ReviewContext.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ColorModeProvider>
                <ReviewProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ReviewProvider>
            </ColorModeProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
