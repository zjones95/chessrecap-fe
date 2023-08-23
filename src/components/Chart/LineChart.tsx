import { Line } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Colors,
} from "chart.js"
import { Stack } from "@mui/material"
import { ChartColors, buildDataset, getDefaultChartOptions } from "./utils"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Colors
)

const LineChart = ({
    data,
    colors,
    label,
    colorMode = "light",
}: {
    data: number[]
    colors: ChartColors
    label: string
    colorMode: "light" | "dark"
}) => {
    const chartData = buildDataset(data, colors, label)

    return (
        <Stack
            sx={{
                // bgcolor: (theme) => theme.palette.background.default,
                bgcolor: colorMode === "light" ? "#F6FEFC" : "#021D15",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
            width="100%"
            minWidth={500}
            maxWidth={700}
            height={336}
            p={3}
            borderRadius={1}
        >
            <Line
                data={{ ...chartData }}
                options={{ ...getDefaultChartOptions() }}
            />
        </Stack>
    )
}

export default LineChart
