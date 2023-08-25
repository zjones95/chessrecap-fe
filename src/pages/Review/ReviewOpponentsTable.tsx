import { Stack, Typography, useMediaQuery } from "@mui/material"
import { MOBILE_ROW_DATA, ROW_DATA } from "./sampleData"

interface Cell {
    label: string
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

const Row = ({ rowData }: { rowData: Cell[] }) => {
    return (
        <Stack direction="row" sx={{ textAlign: "left" }}>
            {rowData.map((cell, i) => {
                return (
                    <Typography
                        flex={cell.flex}
                        fontSize={{ xs: "1.5rem", lg: "3rem" }}
                        px={2}
                        sx={{
                            borderTopLeftRadius: i === 0 ? "4px" : "none",
                            borderBottomLeftRadius: i === 0 ? "4px" : "none",
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
    )
}

const MOBILE_HEAD_CELLS = [
    { label: "Opponent", flex: 3 },
    { label: "Times Played", flex: 2, align: "center" },
    { label: "Wins", flex: 1, align: "center", color: "secondary.main" },
    { label: "Losses", flex: 1, align: "center", color: "error.main" },
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

    return (
        <Stack width="100%" maxWidth={1300} px={{ xs: 3, lg: 0 }}>
            <Typography
                variant="h2"
                bgcolor="background.paper"
                color="common.white"
                width="fit-content"
                py={1}
                px={2}
                borderRadius={1}
                mb={2}
            >
                Most Played Opponents
            </Typography>
            <Header headCells={isMobile ? MOBILE_HEAD_CELLS : HEAD_CELLS} />
            {(isMobile ? MOBILE_ROW_DATA : ROW_DATA).map((rowData) => (
                <Row rowData={rowData} />
            ))}
        </Stack>
    )
}

export default ReviewOpponentsTable
