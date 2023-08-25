import { Stack, Typography } from "@mui/material"
import { IconFlame, IconSkull } from "@tabler/icons-react"

interface StreakProps {
    streak: number
    variant: "win" | "loss"
}

const Streak = ({ streak, variant }: StreakProps) => {
    const isWinStreak = variant === "win"

    return (
        <Stack
            flex={1}
            alignItems="center"
            justifyContent="center"
            bgcolor={isWinStreak ? "secondary.main" : "error.main"}
            color="white"
            minHeight={400}
            minWidth={300}
        >
            {isWinStreak ? (
                <IconFlame size={64} color="white" />
            ) : (
                <IconSkull size={64} color="white" />
            )}
            <Typography fontSize="2rem" pt={2} color="white">
                Longest {isWinStreak ? "Win" : "Loss"} Streak
            </Typography>
            <Typography fontSize="4rem" color="white">
                {streak} {isWinStreak ? "wins" : "losses"}
            </Typography>
        </Stack>
    )
}

const ReviewStreaks = ({
    longestWinStreak,
    longestLossStreak,
}: {
    longestWinStreak: number
    longestLossStreak: number
}) => {
    return (
        <Stack
            maxWidth={1300}
            direction="row"
            width="100%"
            minHeight={400}
            overflow="hidden"
            px={{ xs: 3, lg: 0 }}
            borderRadius={1}
            flexWrap="wrap"
        >
            <Streak variant="win" streak={longestWinStreak} />
            <Streak variant="loss" streak={longestLossStreak} />
        </Stack>
    )
}

export default ReviewStreaks
