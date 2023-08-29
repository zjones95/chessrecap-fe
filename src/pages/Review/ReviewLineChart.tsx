import { Stack, SxProps, Typography } from "@mui/material"
import LineChart from "@app/components/Chart/LineChart"
import { ChartColors } from "./review.types"
import { useColorModeProvider } from "@app/hooks/useColorModeProvider"
import { useInView, animated } from "@react-spring/web"

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

    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
                delay: 300,
            },
        }),
        { once: true }
    )

    return (
        <Stack maxWidth={1300} width="100%" p={{ xs: 3, lg: 0 }}>
            <animated.div ref={ref} style={springs}>
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
                    py={{ xs: 6, lg: 4 }}
                    px={{ xs: 1, lg: 4 }}
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
            </animated.div>
        </Stack>
    )
}

export default ReviewLineChart
