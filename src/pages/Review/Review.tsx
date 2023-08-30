import { Stack } from "@mui/material"
import Processing from "@app/pages/Processing/Processing"
import ReviewTitle from "./ReviewTitle"
import { useColorModeProvider } from "@app/hooks/useColorModeProvider"
import ReviewLineChart from "./ReviewLineChart"
import ReviewRatingCards from "./ReviewRatingCards"
import ReviewGameNumbers from "./ReviewGameNumbers"
import ReviewStreaks from "./ReviewStreaks"
import ReviewOpponentsTable from "./ReviewOpponentsTable"
import ReviewOpeningChart from "./ReviewOpeningChart"
import ReviewShare from "./ReviewShare"
import { useReviewProvider } from "@app/hooks/useReviewProvider"
import { useParams } from "react-router-dom"
import useReviewData from "@app/hooks/useReviewData"
import { useEffect } from "react"

const Review = () => {
    const { colorMode } = useColorModeProvider()
    const { userReport, userReportLoading, getReport } = useReviewProvider()
    const {
        averageRatingChartRating,
        averageRatingChartData,
        hoursPlayedChartData,
        hoursPlayedChartTotal,
    } = useReviewData()

    const { username: usernameParam } = useParams()

    useEffect(() => {
        if (usernameParam) {
            getReport(usernameParam)
        }
    })

    if (userReportLoading) {
        return <Processing />
    }

    return (
        <Stack
            spacing={8}
            width="100%"
            my={8}
            alignItems="center"
            position="relative"
        >
            <ReviewTitle />
            <ReviewLineChart
                chartData={averageRatingChartData}
                chartColors={{
                    gradient:
                        colorMode === "light"
                            ? {
                                  top: "rgba(13, 94, 71, 0.4)",
                                  bottom: "rgba(13, 94, 71, 0.05)",
                              }
                            : {
                                  top: "rgba(13, 94, 71, 0.2)",
                                  bottom: "rgba(13, 94, 71, 0.05)",
                              },
                    points: colorMode === "dark" ? "#F6FEFC" : "#0D5E47",
                    line: colorMode === "dark" ? "#F6FEFC" : "#0D5E47",
                }}
                label="Rating"
                title="Average Rating in 2022"
                titleValue={averageRatingChartRating}
            />
            <ReviewRatingCards
                bulletRating={userReport.highestRatings.highestBulletRating}
                blitzRating={userReport.highestRatings.highestBlitzRating}
                rapidRating={userReport.highestRatings.highestRapidRating}
            />
            <ReviewLineChart
                chartData={hoursPlayedChartData}
                reverse
                chartColors={{
                    gradient: {
                        top: "rgba(109, 183, 35, 0.20)",
                        bottom: "rgba(109, 183, 35, 0.03)",
                    },
                    points: "#6DB723",
                    line: "#6DB723",
                }}
                label="Hours"
                title="Hours Played in 2022"
                titleColor="secondary.main"
                titleValue={hoursPlayedChartTotal}
                titleValueColor="text.primary"
                sx={{
                    border: "4px solid",
                    borderColor: "secondary.main",
                    bgcolor: "background.default",
                }}
            />
            <ReviewGameNumbers
                bulletGames={userReport.totalGames.bullet}
                blitzGames={userReport.totalGames.blitz}
                rapidGames={userReport.totalGames.rapid}
            />
            <ReviewStreaks
                longestWinStreak={userReport.streaks.longestWinStreak}
                longestLossStreak={userReport.streaks.longestLossStreak}
            />
            <ReviewOpponentsTable />
            <ReviewOpeningChart openingData={userReport.openings} />
            <ReviewShare />
        </Stack>
    )
}

export default Review
