import { Stack, Typography, TypographyProps } from "@mui/material"
import { useInView, animated } from "@react-spring/web"

interface GameNumberProps extends TypographyProps {
    number: number
    timeControl: string
}

const GameNumber = ({ number, timeControl, sx }: GameNumberProps) => {
    return (
        <Typography
            variant="body1"
            fontSize={{ xs: "2rem", lg: "3rem" }}
            color="common.white"
            sx={{ py: 1, ...sx }}
        >
            {number}{" "}
            <Typography
                component="span"
                color="secondary.main"
                fontSize={{ xs: "2rem", lg: "3rem" }}
            >
                {timeControl}
            </Typography>{" "}
            games
        </Typography>
    )
}

const GAME_NUMBER_TRANSITIONS = {
    from: {
        opacity: 0,
        x: -100,
    },
    to: {
        opacity: 1,
        x: 0,
    },
}

interface ReviewGameNumbersProps {
    bulletGames: number
    blitzGames: number
    rapidGames: number
}

const ReviewGameNumbers = ({
    bulletGames,
    blitzGames,
    rapidGames,
}: ReviewGameNumbersProps) => {
    const [bulletRef, bulletSprings] = useInView(
        () => ({
            from: {
                ...GAME_NUMBER_TRANSITIONS.from,
            },
            to: {
                ...GAME_NUMBER_TRANSITIONS.to,
            },
        }),
        { once: true }
    )
    const [blitzRef, blitzSprings] = useInView(
        () => ({
            from: {
                ...GAME_NUMBER_TRANSITIONS.from,
            },
            to: {
                ...GAME_NUMBER_TRANSITIONS.to,
                delay: 300,
            },
        }),
        { once: true }
    )
    const [rapidRef, rapidSprings] = useInView(
        () => ({
            from: {
                ...GAME_NUMBER_TRANSITIONS.from,
            },
            to: {
                ...GAME_NUMBER_TRANSITIONS.to,
                delay: 600,
            },
        }),
        { once: true }
    )

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
                    fontSize={{ xs: "3rem", lg: "4rem" }}
                    mb={2}
                    color="common.white"
                >
                    You Played
                </Typography>
                <animated.div
                    ref={bulletRef}
                    style={{ marginRight: "auto", ...bulletSprings }}
                >
                    <GameNumber number={bulletGames} timeControl="bullet" />
                </animated.div>
                <animated.div
                    ref={blitzRef}
                    style={{ margin: "auto", ...blitzSprings }}
                >
                    <GameNumber number={blitzGames} timeControl="blitz" />
                </animated.div>
                <animated.div
                    ref={rapidRef}
                    style={{
                        marginLeft: "auto",
                        ...rapidSprings,
                    }}
                >
                    <GameNumber number={rapidGames} timeControl="rapid" />
                </animated.div>
            </Stack>
        </Stack>
    )
}

export default ReviewGameNumbers
