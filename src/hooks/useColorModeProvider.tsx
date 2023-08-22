import { useContext } from "react"
import { ColorModeContext } from "../contexts/ColorModeContext"

export const useColorModeProvider = () => useContext(ColorModeContext)
