import { Stack, ThemeProvider } from "@mui/material"
import "./App.css"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { useColorModeProvider } from "./contexts/ColorModeContext"

function App() {
    const { theme } = useColorModeProvider()

    return (
        <ThemeProvider theme={theme}>
            <Stack
                alignItems="center"
                height="100%"
                bgcolor="background.default"
            >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Stack>
        </ThemeProvider>
    )
}

export default App
