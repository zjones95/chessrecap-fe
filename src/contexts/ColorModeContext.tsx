import { ReactNode, createContext, useState } from "react"
import { darkTheme, lightTheme } from "../theme"
import { Theme, useMediaQuery } from "@mui/material"
import { ColorMode } from "../types"

interface ColorModeValues {
    colorMode: ColorMode
    theme: Theme
    toggleColorMode: () => void
}

const localColorMode = localStorage.getItem("colorMode") as ColorMode | null

const DEFAULT_COLOR_MODE_VALUES: ColorModeValues = {
    colorMode: localColorMode ?? "light",
    theme: lightTheme,
    toggleColorMode: () => {},
}

export const ColorModeContext = createContext(DEFAULT_COLOR_MODE_VALUES)

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    const perferredColorMode = prefersDarkMode ? "dark" : "light"
    const [colorMode, setColorMode] = useState<ColorMode>(
        localColorMode ?? perferredColorMode
    )

    const toggleColorMode = () => {
        const newColorMode = colorMode === "light" ? "dark" : "light"

        setColorMode(newColorMode)
        localStorage.setItem("colorMode", newColorMode)
    }

    console.log(localColorMode ?? (prefersDarkMode ? "dark" : "light"))

    return (
        <ColorModeContext.Provider
            value={{
                colorMode,
                theme: colorMode === "light" ? lightTheme : darkTheme,
                toggleColorMode,
            }}
        >
            {children}
        </ColorModeContext.Provider>
    )
}
