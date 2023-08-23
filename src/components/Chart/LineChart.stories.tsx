import LineChart from "./LineChart"

export default {
    component: LineChart,
    title: "LineChart",
    tags: ["autodocs"],
}

export const Dark = {
    args: {
        data: [
            1182, 1232, 1211, 1312, 1346, 1534, 1422, 1189, 1433, 1476, 1592,
            1655,
        ],
        colors: {
            gradient: {
                top: "rgba(13, 94, 71, 0.7)",
                bottom: "rgba(41, 41, 41, 0.4)",
            },
            points: "#F6FEFC",
            line: "#F6FEFC",
        },
        label: "Rating",
        colorMode: "dark",
    },
}

export const Light = {
    args: {
        data: [
            1182, 1232, 1211, 1312, 1346, 1534, 1422, 1189, 1433, 1476, 1592,
            1655,
        ],
        colors: {
            gradient: {
                top: "rgba(13, 94, 71, 0.2)",
                bottom: "rgba(246, 254, 252, 0.3)",
            },
            points: "#0D5E47",
            line: "#0D5E47",
        },
        label: "Rating",
        colorMode: "light",
    },
}
