import { Stack, Typography } from "@mui/material"
import OpeningChart from "../../components/Chart/OpeningChart"
import { animated, useInView } from "@react-spring/web"

const SAMPLE_DATA = [
    { name: "Vienna Gambit", total: 10, wins: 5 },
    { name: "Queen's Gambit", total: 32, wins: 19 },
    { name: "King's Gambit", total: 12, wins: 7 },
    { name: "Sicilian Defense", total: 15, wins: 8 },
    { name: "Ruy Lopez", total: 20, wins: 10 },
    { name: "French Defense", total: 5, wins: 2 },
    { name: "Caro-Kann Defense", total: 7, wins: 4 },
    { name: "English Opening", total: 3, wins: 1 },
    { name: "King's Indian Defense", total: 2, wins: 1 },
]

const ReviewOpeningChart = () => {
    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
                delay: 500,
            },
        }),
        {
            once: true,
        }
    )

    return (
        <Stack
            width="100%"
            justifyContent="center"
            bgcolor="background.paper"
            alignItems="center"
        >
            <Stack
                maxWidth={1300}
                height="100%"
                width="100%"
                alignItems="center"
                justifyContent="space-between"
                py={8}
                px={{ xs: 2, lg: 0 }}
                spacing={4}
                minHeight={700}
            >
                <Typography variant="h2" fontSize="3rem" color="common.white">
                    Openings
                </Typography>
                <animated.div ref={ref} style={springs}>
                    <OpeningChart data={SAMPLE_DATA} />
                </animated.div>
            </Stack>
        </Stack>
    )
}

export default ReviewOpeningChart
