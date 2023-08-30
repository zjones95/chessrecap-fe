import { Stack, Typography } from "@mui/material"
import OpeningChart from "@app/components/Chart/OpeningChart"
import { Opening } from "@app/types"

const ReviewOpeningChart = ({ openingData }: { openingData: Opening[] }) => {
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
                <OpeningChart data={openingData} />
            </Stack>
        </Stack>
    )
}

export default ReviewOpeningChart
