import { ChartData, ChartOptions, Color, ScriptableContext } from "chart.js"

export interface ChartColors {
    gradient: {
        top: string
        bottom: string
    }
    points: string
    line: string
}

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
            legend: {
                position: "top",
            },
            tooltip: {
                mode: "nearest",
                axis: "x",
                intersect: false,
                yAlign: "bottom",
            },
        },
        scales: {
            y: {
                ticks: {
                    maxTicksLimit: 5,
                },
                grid: {
                    tickColor: "#e0e0e0",
                    color: "#e0e0e0",
                    lineWidth: 2,
                    tickLength: 0,
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    callback: (value, index) => MONTH_LABELS[index][0],
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
                pointBackgroundColor: chartColors.points,
                backgroundColor: (context: ScriptableContext<"line">) =>
                    getChartFills(context, chartColors.gradient),
            },
        ],
    }
}
