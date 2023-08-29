import { Stack } from "@mui/material"
import { useParams } from "react-router-dom"
import Processing from "@app/pages/Processing/Processing"
import ReviewTitle from "./ReviewTitle"
import { useColorModeProvider } from "@app/hooks/useColorModeProvider"
import ReviewLineChart from "./ReviewLineChart"
import { HOURS_CHART_SAMPLE_DATA, RATING_CHART_SAMPLE_DATA } from "./sampleData"
import ReviewRatingCards from "./ReviewRatingCards"
import ReviewGameNumbers from "./ReviewGameNumbers"
import ReviewStreaks from "./ReviewStreaks"
import ReviewOpponentsTable from "./ReviewOpponentsTable"
import ReviewOpeningChart from "./ReviewOpeningChart"
import ReviewShare from "./ReviewShare"
import { useReviewProvider } from "@app/hooks/useReviewProvider"

const Review = () => {
    const { username } = useParams()
    console.log({ username })

    const { colorMode } = useColorModeProvider()
    const { reportProcessed } = useReviewProvider()

    if (!reportProcessed) {
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
                chartData={RATING_CHART_SAMPLE_DATA}
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
                titleValue={1632}
            />
            <ReviewRatingCards
                bulletRating={1533}
                blitzRating={1343}
                rapidRating={1661}
            />
            <ReviewLineChart
                chartData={HOURS_CHART_SAMPLE_DATA}
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
                titleValue={596}
                titleValueColor="text.primary"
                sx={{
                    border: "4px solid",
                    borderColor: "secondary.main",
                    bgcolor: "background.default",
                }}
            />
            <ReviewGameNumbers />
            <ReviewStreaks longestWinStreak={11} longestLossStreak={7} />
            <ReviewOpponentsTable />
            <ReviewOpeningChart />
            <ReviewShare />
        </Stack>
    )
}

export default Review
