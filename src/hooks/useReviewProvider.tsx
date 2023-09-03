import { useContext } from "react"
import { ReviewContext } from "@app/contexts/ReviewContext"
import {
    getAverageRatingChartProps,
    getHoursPlayedChartProps,
} from "@app/pages/Review/utils"

export const useReviewProvider = () => {
    const reviewContext = useContext(ReviewContext)

    const { averageRatingChartData, averageRatingChartRating } =
        getAverageRatingChartProps(reviewContext.userReport)
    const { hoursPlayedChartData, hoursPlayedChartTotal } =
        getHoursPlayedChartProps(reviewContext.userReport)

    return {
        ...reviewContext,
        averageRatingChartData,
        averageRatingChartRating,
        hoursPlayedChartData,
        hoursPlayedChartTotal,
    }
}
