import { Box, Stack, Typography } from "@mui/material"
import { useInView, animated } from "@react-spring/web"
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
            <Typography
                fontSize={{ xs: "1.5rem", lg: "2rem" }}
                pt={2}
                color="white"
            >
                Longest {isWinStreak ? "Win" : "Loss"} Streak
            </Typography>
            <Typography fontSize={{ xs: "3rem", lg: "4rem" }} color="white">
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
    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
                delay: 500,
            },
        }),
        { once: true }
    )

    return (
        <Box
            component={animated.div}
            ref={ref}
            style={springs}
            maxWidth={1300}
            width="100%"
            borderRadius={1}
        >
            <Stack
                direction="row"
                minHeight={400}
                overflow="hidden"
                px={{ xs: 3, lg: 0 }}
                flexWrap="wrap"
            >
                <Streak variant="win" streak={longestWinStreak} />
                <Streak variant="loss" streak={longestLossStreak} />
            </Stack>
        </Box>
    )
}

export default ReviewStreaks
