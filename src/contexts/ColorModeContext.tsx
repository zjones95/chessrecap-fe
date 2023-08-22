import { ReactNode, createContext, useContext, useState } from "react"
import { darkTheme, lightTheme } from "../theme"
import { Theme } from "@mui/material"

interface ColorModeValues {
    colorMode: "light" | "dark"
    theme: Theme
    toggleColorMode: () => void
}

const DEFAULT_COLOR_MODE_VALUES: ColorModeValues = {
    colorMode: "light",
    theme: lightTheme,
    toggleColorMode: () => {},
}

const ColorModeContext = createContext(DEFAULT_COLOR_MODE_VALUES)

export const useColorModeProvider = () => useContext(ColorModeContext)

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
    const [colorMode, setColorMode] = useState<"light" | "dark">("light")

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
