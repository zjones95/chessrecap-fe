import { Stack, Typography } from "@mui/material"
import OpeningChart from "@app/components/Chart/OpeningChart"

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
                <OpeningChart data={SAMPLE_DATA} />
            </Stack>
        </Stack>
    )
}

export default ReviewOpeningChart
