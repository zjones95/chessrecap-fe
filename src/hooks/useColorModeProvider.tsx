import { useContext } from "react"
import { ColorModeContext } from "@app/contexts/ColorModeContext"

export const useColorModeProvider = () => useContext(ColorModeContext)
