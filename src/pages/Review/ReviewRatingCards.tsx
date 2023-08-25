import { Stack } from "@mui/material"
import ReviewRatingCard from "./ReviewRatingCard"
import { IconChessFilled } from "@tabler/icons-react"
import { useColorModeProvider } from "../../hooks/useColorModeProvider"

interface ReviewRatingCardsProps {
    bulletRating: number
    blitzRating: number
    rapidRating: number
}

const ReviewRatingCards = ({
    bulletRating,
    blitzRating,
    rapidRating,
}: ReviewRatingCardsProps) => {
    const { colorMode, theme } = useColorModeProvider()

    return (
        <Stack
            direction="row"
            width="100%"
            maxWidth={1300}
            gap={2.5}
            justifyContent="center"
            minHeight={400}
            flexWrap="wrap"
            p={{ xs: 3, lg: 0 }}
        >
            <ReviewRatingCard
                icon={<IconChessFilled />}
                backgroundColor={theme.palette.secondary.main}
                timeControl="bullet"
                timeControlColor="#C9F8EA"
                rating={bulletRating}
            />
            <ReviewRatingCard
                icon={<IconChessFilled />}
                backgroundColor={theme.palette.primary.main}
                timeControl="blitz"
                timeControlColor="#C9F8EA"
                rating={blitzRating}
            />
            <ReviewRatingCard
                icon={<IconChessFilled />}
                backgroundColor={theme.palette.primary.main}
                bordered
                timeControl="rapid"
                timeControlColor={
                    colorMode === "light"
                        ? theme.palette.primary.main
                        : "#C9F8EA"
                }
                rating={rapidRating}
            />
        </Stack>
    )
}

export default ReviewRatingCards
