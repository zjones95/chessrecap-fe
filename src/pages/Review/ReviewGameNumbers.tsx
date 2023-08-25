import { Stack, Typography, TypographyProps } from "@mui/material"

interface GameNumberProps extends TypographyProps {
    number: number
    timeControl: string
}

const GameNumber = ({ number, timeControl, sx }: GameNumberProps) => {
    return (
        <Typography
            variant="body1"
            fontSize="3rem"
            color="common.white"
            sx={{ py: 1, ...sx }}
        >
            {number}{" "}
            <Typography component="span" color="secondary.main" fontSize="3rem">
                {timeControl}
            </Typography>{" "}
            games
        </Typography>
    )
}

const ReviewGameNumbers = () => {
    return (
        <Stack
            width="100%"
            bgcolor="background.paper"
            alignItems="center"
            px={{ xs: 3, lg: 0 }}
        >
            <Stack
                width="100%"
                maxWidth={1300}
                sx={{ py: 8, whiteSpace: "nowrap" }}
            >
                <Typography
                    variant="h2"
                    fontSize="4rem"
                    mb={2}
                    color="common.white"
                >
                    You Played
                </Typography>
                <GameNumber
                    number={211}
                    timeControl="bullet"
                    sx={{ mr: "auto" }}
                />
                <GameNumber
                    number={134}
                    timeControl="blitz"
                    sx={{ m: "auto" }}
                />
                <GameNumber
                    number={72}
                    timeControl="rapid"
                    sx={{ ml: "auto" }}
                />
            </Stack>
        </Stack>
    )
}

export default ReviewGameNumbers
