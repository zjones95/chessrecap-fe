import { UserReportResponse } from "@app/types"
import { useReviewProvider } from "./useReviewProvider"

const DEFAULT_REVIEW_DATA = {
    averageRatingChartRating: 0,
    averageRatingChartData: [],
    hoursPlayedChartTotal: 0,
    hoursPlayedChartData: [],
}

const getAverageRatingChartProps = (userReport: UserReportResponse) => {
    const averageRatingChartRating = Math.floor(
        userReport.averageRatings
            .map((rating) => rating.averageRating)
            .reduce((a, b) => a + b) / 12
    )

    const averageRatingChartData = userReport.averageRatings.map(
        (rating) => rating.averageRating
    )

    return { averageRatingChartRating, averageRatingChartData }
}

const getHoursPlayedChartProps = (userReport: UserReportResponse) => {
    const hoursPlayedChartData = userReport.hoursPlayed.map(
        (hours) => hours.hoursPlayed
    )
    const hoursPlayedChartTotal = hoursPlayedChartData
        .reduce((a, b) => a + b)
        .toFixed(1)

    return { hoursPlayedChartData, hoursPlayedChartTotal }
}

const useReviewData = () => {
    const { userReport, userReportLoading } = useReviewProvider()

    return userReportLoading
        ? DEFAULT_REVIEW_DATA
        : {
              ...getAverageRatingChartProps(userReport),
              ...getHoursPlayedChartProps(userReport),
          }
}

export default useReviewData
