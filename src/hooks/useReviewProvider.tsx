import { useContext } from "react"
import { ReviewContext } from "@app/contexts/ReviewContext"

export const useReviewProvider = () => useContext(ReviewContext)
