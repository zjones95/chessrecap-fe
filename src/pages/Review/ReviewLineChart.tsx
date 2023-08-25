import { Stack, SxProps, Typography } from "@mui/material"
import LineChart from "../../components/Chart/LineChart"
import { ChartColors } from "./review.types"
import { useColorModeProvider } from "../../hooks/useColorModeProvider"

interface ReviewLineChartProps {
    chartData: number[]
    chartColors: ChartColors
    title: string
    titleColor?: string
    titleValue: string | number
    titleValueColor?: string
    reverse?: boolean
    label: string
    sx?: SxProps
}

const ReviewLineChart = ({
    chartData,
    chartColors,
    title,
    titleColor,
    titleValue,
    titleValueColor,
    reverse = false,
    label,
    sx,
}: ReviewLineChartProps) => {
    const { colorMode } = useColorModeProvider()

    return (
        <Stack maxWidth={1300} width="100%" p={{ xs: 3, lg: 0 }}>
            <Stack
                minHeight={400}
                bgcolor="background.paper"
                borderRadius={1}
                alignItems="center"
                justifyContent="center"
                direction={{
                    xs: "column",
                    md: reverse ? "row-reverse" : "row",
                }}
                spacing={6}
                p={3}
                sx={{ ...sx }}
            >
                <Stack spacing={1.5}>
                    <Typography
                        variant="h3"
                        fontSize="1.5rem"
                        color={titleColor ?? "#C9F8EA"}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h3"
                        fontSize="5rem"
                        color={titleValueColor ?? "common.white"}
                    >
                        {titleValue}
                    </Typography>
                </Stack>
                <LineChart
                    data={chartData}
                    colors={chartColors}
                    label={label}
                    colorMode={colorMode}
                />
            </Stack>
        </Stack>
    )
}

export default ReviewLineChart
