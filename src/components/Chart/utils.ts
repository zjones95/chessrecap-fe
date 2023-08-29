import { ChartData, ChartOptions, Color, ScriptableContext } from "chart.js"
import { ChartColors } from "@app/pages/Review/review.types"

export const getChartFills = (
    context: ScriptableContext<"line">,
    colors: { top: string; bottom: string }
) => {
    const ctx = context.chart.ctx
    const gradient = ctx.createLinearGradient(0, 0, 0, 200)
    gradient.addColorStop(0, colors.top)
    gradient.addColorStop(1, colors.bottom)
    return gradient as Color
}

export const MONTH_LABELS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

export const getDefaultChartOptions = (): ChartOptions<"line"> => {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                mode: "index",
                displayColors: false,
                axis: "x",
                intersect: false,
                caretPadding: 15,
                yAlign: "bottom",
                padding: 10,
                titleMarginBottom: 10,
                titleAlign: "center",
            },
        },
        scales: {
            y: {
                ticks: {
                    maxTicksLimit: 5,
                    font: {
                        family: "Inter",
                    },
                },
                grid: {
                    color: "#e0e0e0",
                    lineWidth: 2,
                    tickLength: 0,
                },
            },
            x: {
                ticks: {
                    callback: (_, index) => MONTH_LABELS[index][0],
                },
                grid: {
                    // "any" is here because ScriptableContext type defs are inaccurate
                    // context.tick.value does exist in this situation -- this is to only give zeroLine a color
                    color: ((context: ScriptableContext<"line">) =>
                        (context as any).tick.value === 0
                            ? "#e0e0e0"
                            : ("transparent" as any)) as any,
                    lineWidth: 2,
                    tickLength: 0,
                },
            },
        },
    }
}

export const buildDataset = (
    data: number[],
    chartColors: ChartColors,
    label: string
): ChartData<"line"> => {
    return {
        labels: MONTH_LABELS,
        datasets: [
            {
                label,
                fill: true,
                data,
                borderColor: chartColors.line,
                pointRadius: 6,
                pointHoverRadius: 8,
                spanGaps: true,
                pointHoverBackgroundColor: chartColors.points,
                pointHoverBorderColor: chartColors.points,
                pointHitRadius: 60,
                pointBackgroundColor: chartColors.points,
                backgroundColor: (context: ScriptableContext<"line">) =>
                    getChartFills(context, chartColors.gradient),
            },
        ],
    }
}

export const getRandomPastelColor = () => {
    return (
        "hsl(" +
        360 * Math.random() +
        "," +
        (25 + 70 * Math.random()) +
        "%," +
        (65 + 10 * Math.random()) +
        "%)"
    )
}
