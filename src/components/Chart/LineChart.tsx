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
import { buildDataset, getDefaultChartOptions } from "./utils"
import { ColorMode } from "@app/types"
import { ChartColors } from "@app/pages/Review/review.types"

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
    colorMode: ColorMode
}) => {
    const chartData = buildDataset(data, colors, label)

    return (
        <Stack
            sx={{
                bgcolor: colorMode === "light" ? "#F6FEFC" : "#021D15",
            }}
            width="100%"
            minWidth={300}
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
