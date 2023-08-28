import { Box, Stack, Tooltip, Typography } from "@mui/material"
import { getRandomPastelColor } from "./utils"
import { tooltipClasses } from "@mui/material/Tooltip"
import { useInView, animated } from "@react-spring/web"

interface OpeningData {
    name: string
    total: number
    wins: number
}

interface OpeningChartProps {
    data: OpeningData[]
}

interface BarProps extends OpeningData {
    animationDelay?: number
}

const Bar = ({ name, total, wins, animationDelay = 0 }: BarProps) => {
    const randomColor = getRandomPastelColor()

    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
                delay: animationDelay,
            },
        }),
        {
            once: true,
        }
    )

    return (
        <Box component={animated.div} ref={ref} style={springs} mt="auto">
            <Stack
                position="relative"
                color={randomColor}
                alignItems="center"
                justifyContent="end"
                spacing={1}
            >
                <Typography color={randomColor}>{total}</Typography>
                <Tooltip
                    followCursor={true}
                    color={randomColor}
                    arrow={true}
                    placement="top"
                    componentsProps={{
                        popper: {
                            sx: {
                                [`& .${tooltipClasses.tooltip}`]: {
                                    backgroundColor: "#202020",
                                    p: 1,
                                },
                            },
                        },
                        arrow: {
                            sx: {
                                color: "#202020",
                            },
                        },
                    }}
                    title={
                        <Stack>
                            <Typography color={randomColor}>{name}</Typography>
                            <Typography color="common.white">
                                {Math.floor((wins / total) * 100)}% win rate
                            </Typography>
                        </Stack>
                    }
                >
                    <Stack
                        sx={{
                            width: { xs: 40, lg: 80 },
                            height: total * 15,
                            "&:hover": {
                                "& :nth-of-type(1)": {
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
                                boxShadow:
                                    "rgba(0, 0, 0, 0.3) 0px 0px 100px inset",
                                transition: "box-shadow 0.1s ease-in-out",
                            }}
                        />
                        <Box
                            position="absolute"
                            sx={{
                                width: { xs: 40, lg: 80 },
                                height: (total - wins) * 15,
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
        </Box>
    )
}

const OpeningChart = ({ data }: OpeningChartProps) => {
    const sortedData = data.sort((a, b) => b.total - a.total)

    return (
        <Stack
            direction="row"
            spacing={4}
            sx={{
                "& > div": {
                    display: { xs: "none", lg: "flex" },
                },
                "& :nth-of-type(-n+5)": {
                    display: "flex",
                },
            }}
        >
            {sortedData.map((openingData, i) => {
                return (
                    <Bar
                        key={`opening-${openingData.name}`}
                        animationDelay={(i + 1) * 150}
                        {...openingData}
                    />
                )
            })}
        </Stack>
    )
}

export default OpeningChart
