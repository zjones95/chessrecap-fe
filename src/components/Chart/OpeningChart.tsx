import { Box, Stack, Tooltip, Typography } from "@mui/material"
import { getRandomPastelColor } from "./utils"
import { tooltipClasses } from "@mui/material/Tooltip"
import { useInView, animated } from "@react-spring/web"
import { Opening } from "@app/types"

interface OpeningChartProps {
    data: Opening[]
}

interface BarProps extends Opening {
    heightThreshold: number
    animationDelay?: number
}

const BAR_MAX_HEIGHT = 600

const Bar = ({
    name,
    count,
    wins,
    heightThreshold,
    animationDelay = 0,
}: BarProps) => {
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

    const heightPercentage = Number((count / heightThreshold).toFixed(2))
    const winHeightPercentage = Number(
        ((count - wins) / heightThreshold).toFixed(2)
    )
    const barHeight = heightPercentage * BAR_MAX_HEIGHT
    const winBarHeight = winHeightPercentage * BAR_MAX_HEIGHT

    return (
        <Box component={animated.div} ref={ref} style={springs} mt="auto">
            <Stack
                position="relative"
                color={randomColor}
                alignItems="center"
                justifyContent="flex-end"
                spacing={1}
            >
                <Typography color={randomColor}>{count}</Typography>
                <Tooltip
                    followCursor={true}
                    color={randomColor}
                    arrow={true}
                    placement="top"
                    enterTouchDelay={0}
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
                            <Typography color="common.white" fontSize="0.75rem">
                                {wins} wins - {count - wins} losses
                            </Typography>
                            <Typography color="common.white">
                                {Math.floor((wins / count) * 100)}% win rate
                            </Typography>
                        </Stack>
                    }
                >
                    <Stack
                        sx={{
                            width: { xs: 40, lg: 80 },
                            height: barHeight,
                            maxHeight: BAR_MAX_HEIGHT,
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
                                height: barHeight,
                                maxHeight: BAR_MAX_HEIGHT,
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
                                height: winBarHeight,
                                maxHeight: BAR_MAX_HEIGHT,
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
    const sortedData = data.sort((a, b) => b.count - a.count)

    return (
        <Stack
            direction="row"
            spacing={4}
            sx={{
                "& > div": {
                    display: { xs: "none", md: "flex" },
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
                        heightThreshold={sortedData[0].count}
                        {...openingData}
                    />
                )
            })}
        </Stack>
    )
}

export default OpeningChart
