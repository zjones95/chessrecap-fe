import { Box, Stack, Tooltip, Typography } from "@mui/material"
import { getRandomPastelColor } from "./utils"
import { tooltipClasses } from "@mui/material/Tooltip"

interface OpeningData {
    name: string
    total: number
    wins: number
}

interface OpeningChartProps {
    data: OpeningData[]
}

const Bar = ({ name, total, wins }: OpeningData) => {
    const randomColor = getRandomPastelColor()

    return (
        <Stack
            position="relative"
            color={randomColor}
            justifyContent="end"
            spacing={1}
        >
            <Typography color={randomColor}>{total}</Typography>
            <Tooltip
                followCursor={true}
                color={randomColor}
                componentsProps={{
                    popper: {
                        sx: {
                            [`& .${tooltipClasses.tooltip}`]: {
                                backgroundColor: "#202020",
                                color: randomColor,
                            },
                        },
                    },
                }}
                title={name}
            >
                <Stack
                    sx={{
                        width: { xs: 40, lg: 80 },
                        height: total * 15,
                        "&:hover": {
                            "& :nth-child(1)": {
                                boxShadow: "none",
                            },
                            filter: "drop-shadow(0 0 7px)",
                        },
                        transition: "filter 0.1s ease-in-out",
                        cursor: "pointer",
                    }}
                    position="relative"
                >
                    <Box
                        sx={{
                            width: { xs: 40, lg: 80 },
                            height: total * 15,
                            bgcolor: randomColor,
                            borderRadius: 1,
                            boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 100px inset",
                            transition: "box-shadow 0.1s ease-in-out",
                        }}
                    />
                    <Box
                        position="absolute"
                        sx={{
                            width: { xs: 40, lg: 80 },
                            height: wins * 15,
                            bgcolor: randomColor,
                            borderRadius: 1,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            zIndex: 3,
                        }}
                    />
                </Stack>
            </Tooltip>
        </Stack>
    )
}

const OpeningChart = ({ data }: OpeningChartProps) => {
    const sortedData = data.sort((a, b) => b.total - a.total)

    return (
        <Stack direction="row" spacing={4}>
            {sortedData.map((openingData) => {
                return <Bar {...openingData} />
            })}
        </Stack>
    )
}

export default OpeningChart
