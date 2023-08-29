import { useContext } from "react"
import { ReviewContext } from "../contexts/ReviewContext"

export const useReviewProvider = () => useContext(ReviewContext)
