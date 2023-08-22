import { Box, LinearProgress, Paper, Stack, Typography } from "@mui/material"
import { IconCalendarDown, IconSettingsFilled } from "@tabler/icons-react"

type MonthStatus = "processing" | "complete" | "error" | "unprocessed"

interface ProcessingState {
    month: number
    status: MonthStatus
}

const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
]

const SAMPLE_PROCESSING_STATES: ProcessingState[] = [
    { month: 1, status: "complete" },
    { month: 2, status: "complete" },
    { month: 3, status: "complete" },
    { month: 4, status: "complete" },
    { month: 5, status: "complete" },
    { month: 6, status: "processing" },
    { month: 7, status: "unprocessed" },
    { month: 8, status: "unprocessed" },
    { month: 9, status: "unprocessed" },
    { month: 10, status: "unprocessed" },
    { month: 11, status: "unprocessed" },
    { month: 12, status: "unprocessed" },
]

const getProgressValue = () => {
    const completedMonths = SAMPLE_PROCESSING_STATES.filter(
        (processingState) => processingState.status !== "unprocessed"
    ).length

    return (completedMonths / SAMPLE_PROCESSING_STATES.length) * 100
}

const getProcessingStateColor = (processingState: ProcessingState) => {
    switch (processingState.status) {
        case "complete":
            return "secondary.main"
        case "processing":
            return "info.main"
        case "error":
            return "error.main"
        case "unprocessed":
            return "grey.600"
    }
}

const Month = (processingState: ProcessingState) => {
    return (
        <Stack
            alignItems="center"
            spacing={1}
            sx={{ color: getProcessingStateColor(processingState) }}
        >
            <IconCalendarDown size={40} />
            <Typography
                variant="body1"
                color={getProcessingStateColor(processingState)}
                fontSize="1.5rem"
            >
                {monthNames[processingState.month - 1]}
            </Typography>
        </Stack>
    )
}

const Processing = () => {
    return (
        <Paper elevation={4} sx={{ margin: "auto" }}>
            <Stack
                bgcolor="background.paper"
                borderRadius={1}
                py={5}
                px={8}
                spacing={5}
                alignItems="center"
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                        variant="h2"
                        mb="auto"
                        fontSize="3rem"
                        color="common.white"
                    >
                        Processing
                    </Typography>
                    <Stack
                        component="span"
                        sx={{
                            color: "common.white",
                            "@keyframes rotate": {
                                "0%": { transform: "rotate(0deg)" },
                                "100%": { transform: "rotate(360deg)" },
                            },
                            animation: "rotate 1.75s ease-in-out infinite",
                            transformOrigin: "center center",
                        }}
                    >
                        <IconSettingsFilled size={56} />
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={5}>
                    {SAMPLE_PROCESSING_STATES.map((processingState) => (
                        <Month
                            key={processingState.month}
                            {...processingState}
                        />
                    ))}
                </Stack>
                <Box width="100%">
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={getProgressValue()}
                        sx={{ height: "8px", borderRadius: "8px" }}
                    />
                </Box>
            </Stack>
        </Paper>
    )
}

export default Processing
