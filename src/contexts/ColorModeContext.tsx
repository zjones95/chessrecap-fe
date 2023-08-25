import { ReactNode, createContext, useState } from "react"
import { darkTheme, lightTheme } from "../theme"
import { Theme, useMediaQuery } from "@mui/material"
import { ColorMode } from "../types"

interface ColorModeValues {
    colorMode: ColorMode
    theme: Theme
    toggleColorMode: () => void
}

const DEFAULT_COLOR_MODE_VALUES: ColorModeValues = {
    colorMode: "light",
    theme: lightTheme,
    toggleColorMode: () => {},
}

export const ColorModeContext = createContext(DEFAULT_COLOR_MODE_VALUES)

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    const [colorMode, setColorMode] = useState<ColorMode>(
        prefersDarkMode ? "dark" : "light"
    )

    return (
        <ColorModeContext.Provider
            value={{
                colorMode,
                theme: colorMode === "light" ? lightTheme : darkTheme,
                toggleColorMode: () =>
                    setColorMode(colorMode === "light" ? "dark" : "light"),
            }}
        >
            {children}
        </ColorModeContext.Provider>
    )
}
