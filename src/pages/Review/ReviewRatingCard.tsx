import { Box, Stack, Typography } from "@mui/material"
import { animated, useInView } from "@react-spring/web"
import React from "react"

interface ReviewRatingCardProps {
    icon: React.ReactNode
    backgroundColor: React.CSSProperties["color"]
    timeControl: string
    timeControlColor: React.CSSProperties["color"]
    rating: string | number
    animationDelay?: number
    bordered?: boolean
}

const ReviewRatingCard = ({
    icon,
    backgroundColor,
    timeControl,
    timeControlColor,
    rating,
    animationDelay = 0,
    bordered = false,
}: ReviewRatingCardProps) => {
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
        <Box
            component={animated.div}
            ref={ref}
            style={springs}
            flex={1}
            minWidth={{ xs: "100%", lg: 420 }}
            height={400}
        >
            <Stack
                alignItems="center"
                justifyContent="center"
                bgcolor={bordered ? "transparent" : backgroundColor}
                borderRadius={1}
                height="100%"
                position="relative"
                sx={{
                    border: bordered ? "4px solid" : "none",
                    borderColor: backgroundColor,
                }}
            >
                <Stack
                    position="absolute"
                    alignItems="center"
                    justifyContent="center"
                    width={160}
                    sx={{
                        transform: "rotate(30deg)",
                        color: bordered
                            ? "rgba(13, 94, 71, 0.20)"
                            : "rgba(0, 0, 0, 0.1)",
                        "& svg": {
                            width: { xs: "250px", lg: "300px" },
                            height: { xs: "250px", lg: "300px" },
                        },
                    }}
                >
                    {icon}
                </Stack>
                <Typography
                    zIndex={3}
                    variant="h3"
                    fontSize="3rem"
                    color={timeControlColor}
                    textTransform="uppercase"
                >
                    {timeControl}
                </Typography>
                <Typography
                    zIndex={3}
                    variant="h3"
                    fontSize="4rem"
                    color={bordered ? "text.primary" : "white"}
                >
                    {rating}
                </Typography>
            </Stack>
        </Box>
    )
}

export default ReviewRatingCard
