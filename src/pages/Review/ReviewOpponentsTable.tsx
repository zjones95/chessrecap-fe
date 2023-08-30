import { Box, Stack, Typography, useMediaQuery } from "@mui/material"
import { animated, useInView } from "@react-spring/web"
import { useReviewProvider } from "@app/hooks/useReviewProvider"

interface Cell {
    label: string | number
    flex: number
    align?: string
    color?: string
}

const Header = ({ headCells }: { headCells: Cell[] }) => {
    return (
        <Stack direction="row" sx={{ textAlign: "left" }}>
            {headCells.map((headCell, i) => {
                return (
                    <Typography
                        key={`opponents-head-cell-${headCell.label}`}
                        bgcolor="background.paper"
                        flex={headCell.flex}
                        fontSize={{ xs: "1rem", lg: "1.5rem" }}
                        whiteSpace="nowrap"
                        py={1}
                        px={2}
                        sx={{
                            borderTopLeftRadius: i === 0 ? "4px" : "none",
                            borderBottomLeftRadius: i === 0 ? "4px" : "none",
                            borderTopRightRadius:
                                i === headCells.length - 1 ? "4px" : "none",
                            borderBottomRightRadius:
                                i === headCells.length - 1 ? "4px" : "none",
                            textAlign: headCell.align ?? "left",
                            color: "common.white",
                        }}
                    >
                        {headCell.label}
                    </Typography>
                )
            })}
        </Stack>
    )
}

const Row = ({
    rowData,
    animationDelay = 0,
}: {
    rowData: Cell[]
    animationDelay?: number
}) => {
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
        { once: true }
    )

    return (
        <Box component={animated.div} ref={ref} style={springs}>
            <Stack direction="row" sx={{ textAlign: "left" }}>
                {rowData.map((cell, i) => {
                    return (
                        <Typography
                            key={`opponents-row-${i}-${cell.label}`}
                            flex={cell.flex}
                            fontSize={{ xs: "1rem", lg: "2.5rem" }}
                            px={2}
                            sx={{
                                borderTopLeftRadius: i === 0 ? "4px" : "none",
                                borderBottomLeftRadius:
                                    i === 0 ? "4px" : "none",
                                borderTopRightRadius:
                                    i === rowData.length - 1 ? "4px" : "none",
                                borderBottomRightRadius:
                                    i === rowData.length - 1 ? "4px" : "none",
                                textAlign: cell.align ?? "left",
                                color: cell.color ?? "text.primary",
                            }}
                        >
                            {cell.label}
                        </Typography>
                    )
                })}
            </Stack>
        </Box>
    )
}

const MOBILE_HEAD_CELLS = [
    { label: "Opponent", flex: 3 },
    { label: "# Played", flex: 2, align: "center" },
    { label: "W", flex: 1, align: "center", color: "secondary.main" },
    { label: "L", flex: 1, align: "center", color: "error.main" },
]

const HEAD_CELLS = [
    { label: "#", flex: 1 },
    { label: "Opponent", flex: 3 },
    { label: "Rating", flex: 2, align: "center" },
    { label: "Times Played", flex: 2, align: "center" },
    { label: "Wins", flex: 1, align: "center", color: "secondary.main" },
    { label: "Losses", flex: 1, align: "center", color: "error.main" },
]

const ReviewOpponentsTable = () => {
    const isMobile = useMediaQuery("(max-width: 600px)")
    const { userReport } = useReviewProvider()

    const opponentRows = userReport.mostPlayedOpponents.map((opponent, i) => {
        return [
            { label: `${i + 1}.`, flex: 1 },
            { label: opponent.name, flex: 3 },
            { label: opponent.rating, flex: 2, align: "center" },
            { label: opponent.count, flex: 2, align: "center" },
            {
                label: opponent.wins,
                flex: 1,
                align: "center",
                color: "secondary.main",
            },
            {
                label: opponent.losses,
                flex: 1,
                align: "center",
                color: "error.main",
            },
        ]
    })

    const mobileOpponentRows = userReport.mostPlayedOpponents.map(
        (opponent) => {
            return [
                { label: opponent.name, flex: 3 },
                { label: opponent.count, flex: 2, align: "center" },
                {
                    label: opponent.wins,
                    flex: 1,
                    align: "center",
                    color: "secondary.main",
                },
                {
                    label: opponent.losses,
                    flex: 1,
                    align: "center",
                    color: "error.main",
                },
            ]
        }
    )

    return (
        <Stack width="100%" maxWidth={1300} px={{ xs: 3, lg: 0 }}>
            <Typography
                variant="h2"
                fontSize={{ xs: "2rem", lg: "3rem" }}
                bgcolor="background.paper"
                color="common.white"
                width={{ xs: "100%", lg: "fit-content" }}
                py={1}
                px={2}
                borderRadius={1}
                mb={2}
            >
                Most Played Opponents
            </Typography>
            <Header headCells={isMobile ? MOBILE_HEAD_CELLS : HEAD_CELLS} />
            <Stack spacing={1} mt={1}>
                {(isMobile ? mobileOpponentRows : opponentRows).map(
                    (rowData, i) => (
                        <Row
                            key={`opponents-row-${i}`}
                            animationDelay={(i + 1) * 100}
                            rowData={rowData}
                        />
                    )
                )}
            </Stack>
        </Stack>
    )
}

export default ReviewOpponentsTable
