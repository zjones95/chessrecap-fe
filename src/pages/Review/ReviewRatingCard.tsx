import { Stack, Typography } from "@mui/material"
import React from "react"

interface ReviewRatingCardProps {
    icon: React.ReactNode
    backgroundColor: React.CSSProperties["color"]
    timeControl: string
    timeControlColor: React.CSSProperties["color"]
    rating: string | number
    bordered?: boolean
}

const ReviewRatingCard = ({
    icon,
    backgroundColor,
    timeControl,
    timeControlColor,
    rating,
    bordered = false,
}: ReviewRatingCardProps) => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            flex={1}
            minWidth={420}
            height={400}
            bgcolor={bordered ? "transparent" : backgroundColor}
            borderRadius={1}
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
                    "& svg": { width: "300px", height: "300px" },
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
    )
}

export default ReviewRatingCard
