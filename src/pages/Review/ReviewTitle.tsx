import { Stack, Typography } from "@mui/material"

const ReviewTitle = () => {
    return (
        <Stack spacing={1} alignItems="center">
            <Typography variant="h2" lineHeight="4rem" fontSize="4rem">
                YOUR <span style={{ color: "#0D5E47" }}>2022</span> CHESS.COM
            </Typography>
            <Typography
                variant="h2"
                lineHeight="4rem"
                fontSize="4rem"
                sx={{
                    bgcolor: "#0D5E47",
                    width: "auto",
                    borderRadius: "4px",
                    color: "common.white",
                }}
                py={0.5}
                px={1}
            >
                YEAR-IN-REVIEW
            </Typography>
        </Stack>
    )
}

export default ReviewTitle
