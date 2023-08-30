import { Stack, Typography } from "@mui/material"
import { useSpring, animated } from "@react-spring/web"
import { useParams } from "react-router-dom"

const ReviewTitle = () => {
    const { username } = useParams()

    const [props] = useSpring(
        () => ({
            from: { opacity: 0, transform: "translateY(50px)" },
            to: { opacity: 1, transform: "translateY(0)" },
        }),
        []
    )

    return (
        <animated.div style={props}>
            <Stack spacing={1} alignItems="center" p={{ xs: 2, lg: 0 }}>
                <Typography
                    variant="h2"
                    lineHeight={{ xs: "3rem", lg: "4rem" }}
                    fontSize={{ xs: "3rem", lg: "4rem" }}
                >
                    {username ? `${username.toUpperCase()}'S` : "YOUR"}{" "}
                    <span style={{ color: "#0D5E47" }}>2022</span> CHESS.COM
                </Typography>
                <Typography
                    variant="h2"
                    lineHeight={{ xs: "3rem", lg: "4rem" }}
                    fontSize={{ xs: "3rem", lg: "4rem" }}
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
        </animated.div>
    )
}

export default ReviewTitle
