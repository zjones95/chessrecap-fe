import { UserReportResponse } from "@app/types"

export const getAverageRatingChartProps = (userReport: UserReportResponse) => {
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

export const getHoursPlayedChartProps = (userReport: UserReportResponse) => {
    const hoursPlayedChartData = userReport.hoursPlayed.map(
        (hours) => hours.hoursPlayed
    )
    const hoursPlayedChartTotal = hoursPlayedChartData
        .reduce((a, b) => a + b)
        .toFixed(1)

    return { hoursPlayedChartData, hoursPlayedChartTotal }
}
